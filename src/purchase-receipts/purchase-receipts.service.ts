import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PurchaseReceiptsRepository } from './purchase-receipts.repository.js';
import { CreatePurchaseReceiptDto } from './dto/create-purchase_receipt.dto.js';
import { UpdateStatusPurchaseReceiptDto } from './dto/update-purchase_receipt.dto.js';
import { PrismaService } from '../database/prisma.service.js';
import { STATUS } from '../generated/prisma/enums.js';

@Injectable()
export class PurchaseReceiptsService {
  constructor(
    private readonly prRepository: PurchaseReceiptsRepository,
    private readonly prisma: PrismaService,
  ) { }

  // GET methods 
  async findAll() {
    return this.prRepository.findAll();
  }

  async findById(id: number) {
    const pr = await this.prRepository.findById(id);

    if (!pr) throw new NotFoundException("Purchase Receipt not found");

    return pr;
  }

  // POST methods 
  async create(dto: CreatePurchaseReceiptDto) {
    return this.prRepository.create(dto);
  }

  async confirmReceipt(id: number) {
    return this.prisma.$transaction(async (tx) => {
      // 1. check ton tai receipt 
      const receipt = await this.prRepository.findReceiptForConfirm(tx, id);
      if (!receipt) throw new NotFoundException("Receipt not found");

      // 2. check status 
      if (receipt.status !== STATUS.DRAFT) throw new BadRequestException('Only DRAFT can confirm');

      // 3. cap nhat phieu -> nhap kho
      const updatedReceipt = await this.prRepository.confirmReceipt(tx, id);

      // 4 ghi tung item trong items (chitiet) vao kho
      for (const item of receipt.purchaseReceiptItems) {
        await this.prRepository.updateInventory(tx, item.productId, item.quantity);
      }

      return updatedReceipt;
    });
  }

  // PUT
  async updateStatus(id: number, dto: UpdateStatusPurchaseReceiptDto) {
    const pr = await this.prRepository.findById(id);
    if (!pr) throw new NotFoundException(`Purchase Receipt [${id}] not found`);

    const updated = await this.prRepository.updateStatus(id, dto);
    if (!updated) throw new BadRequestException("Not updated");

    return updated;

  }
}

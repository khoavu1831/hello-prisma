import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PurchaseReceiptsRepository } from './purchase-receipts.repository.js';
import { CreatePurchaseReceiptDto } from './dto/create-purchase_receipt.dto.js';
import { UpdateStatusPurchaseReceiptDto } from './dto/update-purchase_receipt.dto.js';

@Injectable()
export class PurchaseReceiptsService {
  constructor(private readonly prRepository: PurchaseReceiptsRepository) { }

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

  async confirmPurchaseReceipt() {
    
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

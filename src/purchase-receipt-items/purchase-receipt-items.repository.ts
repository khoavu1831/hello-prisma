import { Injectable } from '@nestjs/common';
import { CreatePurchaseReceiptItemDto } from './dto/create-purchase-receipt-item.dto.js';
import { UpdatePurchaseReceiptItemDto } from './dto/update-purchase-receipt-item.dto.js';
import { PrismaService } from '../database/prisma.service.js';

@Injectable()
export class PurchaseReceiptItemsRepository {
  constructor(private readonly prisma: PrismaService) { }

  // GET
  findAll() {
    return `This action returns all purchaseReceiptItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} purchaseReceiptItem`;
  }
  
  create(dto: CreatePurchaseReceiptItemDto) {
    return 'This action adds a new purchaseReceiptItem';
  }


  update(id: number, updatePurchaseReceiptItemDto: UpdatePurchaseReceiptItemDto) {
    return `This action updates a #${id} purchaseReceiptItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchaseReceiptItem`;
  }
}

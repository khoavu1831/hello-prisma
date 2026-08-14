import { Injectable } from '@nestjs/common';
import { CreatePurchaseReceiptItemDto } from './dto/create-purchase-receipt-item.dto.js';
import { UpdatePurchaseReceiptItemDto } from './dto/update-purchase-receipt-item.dto.js';

@Injectable()
export class PurchaseReceiptItemsService {
  create(createPurchaseReceiptItemDto: CreatePurchaseReceiptItemDto) {
    return 'This action adds a new purchaseReceiptItem';
  }

  findAll() {
    return `This action returns all purchaseReceiptItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} purchaseReceiptItem`;
  }

  update(id: number, updatePurchaseReceiptItemDto: UpdatePurchaseReceiptItemDto) {
    return `This action updates a #${id} purchaseReceiptItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchaseReceiptItem`;
  }
}

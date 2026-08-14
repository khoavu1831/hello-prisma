import { Module } from '@nestjs/common';
import { PurchaseReceiptItemsService } from './purchase-receipt-items.service.js';
import { PurchaseReceiptItemsController } from './purchase-receipt-items.controller.js';

@Module({
  controllers: [PurchaseReceiptItemsController],
  providers: [PurchaseReceiptItemsService],
})
export class PurchaseReceiptItemsModule {}

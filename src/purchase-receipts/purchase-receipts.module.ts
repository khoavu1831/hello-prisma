import { Module } from '@nestjs/common';
import { PurchaseReceiptsService } from './purchase-receipts.service.js';
import { PurchaseReceiptsController } from './purchase-receipts.controller.js';
import { PurchaseReceiptsRepository } from './purchase-receipts.repository.js';

@Module({
  controllers: [PurchaseReceiptsController],
  providers: [PurchaseReceiptsService, PurchaseReceiptsRepository],
})
export class PurchaseReceiptsModule { }

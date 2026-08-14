import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SuppliersModule } from './suppliers/suppliers.module.js';
import { DatabaseModule } from './database/prisma.module.js';
import { PurchaseReceiptsModule } from './purchase-receipts/purchase-receipts.module.js';
import { ProductsModule } from './products/products.module.js';
import { PurchaseReceiptItemsModule } from './purchase-receipt-items/purchase-receipt-items.module.js';
import { InventoryModule } from './inventory/inventory.module.js';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SuppliersModule,
    DatabaseModule,
    PurchaseReceiptsModule,
    ProductsModule,
    PurchaseReceiptItemsModule,
    InventoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

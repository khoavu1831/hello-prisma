import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SuppliersModule } from './suppliers/suppliers.module.js';
import { DatabaseModule } from './database/prisma.module.js';
import { PurchaseReceiptsModule } from './purchase-receipts/purchase-receipts.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SuppliersModule,
    DatabaseModule,
    PurchaseReceiptsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

import { Type } from 'class-transformer';
import { IsArray, IsNumber } from 'class-validator';
import { CreatePurchaseReceiptItemDto } from '../../purchase-receipt-items/dto/create-purchase-receipt-item.dto.js';

export class CreatePurchaseReceiptDto {
  @IsNumber()
  @Type(() => Number)
  supplierId!: number

  @IsArray()
  items?: CreatePurchaseReceiptItemDto[]
}
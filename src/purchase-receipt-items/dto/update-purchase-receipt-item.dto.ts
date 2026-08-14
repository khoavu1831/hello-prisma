import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchaseReceiptItemDto } from './create-purchase-receipt-item.dto.js';

export class UpdatePurchaseReceiptItemDto extends PartialType(CreatePurchaseReceiptItemDto) {}

import { IsEnum, IsString } from 'class-validator';
import { STATUS } from '../../generated/prisma/enums.js';

export class UpdateStatusPurchaseReceiptDto {
  @IsEnum(STATUS)
  status!: STATUS
}

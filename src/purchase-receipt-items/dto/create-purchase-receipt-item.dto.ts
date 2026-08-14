import { Type } from "class-transformer"
import { IsNumber } from "class-validator"

export class CreatePurchaseReceiptItemDto {
  @IsNumber()
  @Type(() => Number)
  productId!: number

  @IsNumber()
  quantity!: number

  @IsNumber()
  price: number = 0
}

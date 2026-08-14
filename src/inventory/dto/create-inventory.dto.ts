import { Type } from "class-transformer";
import { IsNumber } from "class-validator";

export class CreateInventoryDto {
  @IsNumber()
  @Type(() => Number)
  stock: number = 0

  @IsNumber()
  @Type(() => Number)
  productId!: number
}

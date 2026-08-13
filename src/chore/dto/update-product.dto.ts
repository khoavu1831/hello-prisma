import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto {

  @IsOptional()
  @IsString()
  name: string | undefined;

  @IsNumber()
  sale_price!: number;
}
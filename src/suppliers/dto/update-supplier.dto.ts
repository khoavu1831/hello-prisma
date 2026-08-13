import { IsString } from 'class-validator';

export class UpdateSupplierDto {
  @IsString()
  name: string | undefined;
}
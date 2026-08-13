import { Optional } from "@nestjs/common";
import { Type } from "class-transformer";
import { IsNumber } from "class-validator";

export class PaginationDto {
  @IsNumber()
  @Optional()
  @Type(() => Number)
  page: number = 1;

  @IsNumber()
  @Optional()
  @Type(() => Number)
  limit: number = 5;
}
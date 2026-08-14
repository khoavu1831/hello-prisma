import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';

@Injectable()
export class ProductsRepository {
  constructor(private readonly prisma: PrismaService) { }

  // GET 
  async findAll() {
    return this.prisma.product.findMany();
  }

  async findById(id: number) {
    return this.prisma.product.findFirst({
      where: {
        id: id,
      }
    });
  }

  // POST 
  async create(dto: CreateProductDto) {
    return this.prisma.product.create({
      data: {
        name: dto.name,
        salePrice: dto.salePrice,
      }
    });
  }
}

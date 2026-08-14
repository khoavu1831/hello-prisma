import { Injectable } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto.js';
import { UpdateInventoryDto } from './dto/update-inventory.dto.js';
import { PrismaService } from '../database/prisma.service.js';

@Injectable()
export class InventoryReposiory {
  constructor(private readonly prisma: PrismaService) { }

  async create(createInventoryDto: CreateInventoryDto) {
    return '';
  }

  findAll() {
    return `This action returns all inventory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventory`;
  }

  update(id: number, updateInventoryDto: UpdateInventoryDto) {
    return `This action updates a #${id} inventory`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventory`;
  }
}

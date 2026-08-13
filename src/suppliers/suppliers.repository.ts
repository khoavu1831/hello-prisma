import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto.js';
import { PrismaService } from '../database/prisma.service.js';
import { UpdateSupplierDto } from './dto/update-supplier.dto.js';
import { PaginationDto } from '../common/dto/pagination.dto.js';

@Injectable()
export class SuppliersRepository {
  constructor(private readonly prisma: PrismaService) { }

  // GET methods 
  async findAll() {
    return this.prisma.supplier.findMany();
  }

  async findById(id: number) {
    return this.prisma.supplier.findFirst({
      where: {
        id: id,
      }
    });
  }

  async pagination(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    const skip = (page - 1) * limit;
    const [suppliers, totalRecords] = await Promise.all([
      await this.prisma.supplier.findMany({
        skip: skip,
        take: limit,
        orderBy: {
          id: 'asc',
        }
      }),

      await this.prisma.supplier.count(),
    ]);

    return {
      data: suppliers,
      meta: {
        currentPage: page,
        totalRecords: totalRecords,
        limitRecords: limit,
        totalPages: Math.ceil(totalRecords / limit),
      }
    }
  }

  // POST methods 
  async create(createSupplierDto: CreateSupplierDto) {
    return this.prisma.supplier.create({
      data: {
        name: createSupplierDto.name,
      }
    });
  }

  // PUT methods
  async update(id: number, updateSupplierDto: UpdateSupplierDto) {
    return this.prisma.supplier.updateManyAndReturn({
      where: {
        id: id,
      },
      data: {
        name: updateSupplierDto.name,
      }
    })
  }
}

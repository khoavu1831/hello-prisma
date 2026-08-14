import { HttpCode, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto.js';
import { UpdateSupplierDto } from './dto/update-supplier.dto.js';
import { SuppliersRepository } from './suppliers.repository.js';
import { PaginationDto } from '../common/dto/pagination.dto.js';

@Injectable()
export class SuppliersService {
  constructor(private readonly supplierRepository: SuppliersRepository) { }

  // GET methods 
  async findAll() {
    const suppliers = await this.supplierRepository.findAll();

    return {
      data: suppliers,
    };
  }

  async findById(id: number) {
    const supplier = await this.supplierRepository.findById(id);

    if (!supplier) {
      throw new NotFoundException("Supplier not found");
    }

    return {
      data: supplier,
    };
  }

  async pagination(paginationDto: PaginationDto) {
    return this.supplierRepository.pagination(paginationDto);
  }

  // POST methods 
  async create(createSupplierDto: CreateSupplierDto) {
    return this.supplierRepository.create(createSupplierDto);
  }

  // PUT methods
  async update(id: number, updateSupplierDto: UpdateSupplierDto) {
    await this.findById(id);

    return this.supplierRepository.update(id, updateSupplierDto);
  }
}

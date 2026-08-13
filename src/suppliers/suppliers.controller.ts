import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { SuppliersService } from './suppliers.service.js';
import { CreateSupplierDto } from './dto/create-supplier.dto.js';
import { UpdateSupplierDto } from './dto/update-supplier.dto.js';
import { PaginationDto } from '../common/dto/pagination.dto.js';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) { }

  // GET methods
  @Get()
  async pagination(
    @Query() paginationDto: PaginationDto) {
    return this.suppliersService.pagination(paginationDto);
  }
  
  @Get('all')
  async findAll() {
    return this.suppliersService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    return this.suppliersService.findById(id);
  }

  // POST methods
  @Post()
  async create(@Body() createSupplierDto: CreateSupplierDto) {
    return this.suppliersService.create(createSupplierDto);
  }

  // PUT methods
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSupplierDto: UpdateSupplierDto
  ) {
    return this.suppliersService.update(id, updateSupplierDto);
  }

}

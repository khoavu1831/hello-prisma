import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  // GET
  @Get()
  async findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findById(id);
  }

  // POST
  @Post()
  async create(@Body() dto: CreateProductDto) {
    return this.productsService.create(dto);
  }
}

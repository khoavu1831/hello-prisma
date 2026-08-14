import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsRepository } from './products.repository.js';
import { CreateProductDto } from './dto/create-product.dto.js';

@Injectable()
export class ProductsService {
  constructor(private readonly productRepository: ProductsRepository) { }

  // GET 
  async findAll() {
    return this.productRepository.findAll();
  }

  async findById(id: number) {
    const product = await this.productRepository.findById(id);

    if (!product) throw new NotFoundException("Product not found");

    return product;
  }

  // POST
  async create(dto: CreateProductDto) {
    return this.productRepository.create(dto);
  }
}

// import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put, Query } from '@nestjs/common';
// import { ProductsService } from './products.service.js';
// import { CreateProductDto } from './dto/create-product.dto.js';
// import { UpdateProductDto } from './dto/update-product.dto.js';

// @Controller('products')
// export class ProductsController {
//   constructor(private readonly productsService: ProductsService) { }

//   @Get()
//   async findAll() {
//     return this.productsService.findAll();
//   }

//   @Get('pagination')
//   async pagination(
//     @Query('page', ParseIntPipe) page: number = 1,
//     @Query('limit', ParseIntPipe) limit: number = 3,
//   ) {
//     return this.productsService.pagination(page, limit);
//   }

//   @Get('pgn')
//   async pgn(
//     @Query('page', ParseIntPipe) pageCurrent: number,
//     @Query('limit', ParseIntPipe) limitRecords: number,
//   ) {
//     return this.productsService.pgn(pageCurrent, limitRecords);
//   }

//   // @Get('max')
//   // async findHighestPrice() {
//   //   return this.productsService.findHighestPrice();
//   // }

//   @Get(':id')
//   async findOne(@Param('id', ParseIntPipe) id: number) {
//     return this.productsService.findOne(id);
//   }

//   @Post()
//   async create(@Body() createProductDto: CreateProductDto) {
//     return this.productsService.create(createProductDto);
//   }

//   // @Post('filter')
//   // async filterWithKeyword(@Body() kw: { keyword: string }) {
//   //   console.log(kw.keyword);
//   //   return this.productsService.filterWithKeyword(kw.keyword);
//   // }

//   @Put()
//   async updateByName(@Body() data: { name: string }) {
//     return this.productsService.updateManyPriceByName(data.name, 0);
//   }

//   @Put('price/:id')
//   async updatePrice(@Param('id', ParseIntPipe) id: number) {
//     return this.productsService.updateIncreasePrice(id);
//   }

//   @Put(':id')
//   async updateById(
//     @Param('id', ParseIntPipe) id: number,
//     @Body() updateProductDto: UpdateProductDto
//   ) {
//     console.log(id, updateProductDto);

//     return this.productsService.update(id, updateProductDto);
//   }

//   @Delete(':id')
//   async delete(
//     @Param('id', ParseIntPipe) id: number
//   ) {
//     return this.productsService.deleteById(id);
//   }



// }

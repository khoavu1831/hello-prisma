// import { Body, Injectable } from '@nestjs/common';
// import { PrismaService } from '../database/prisma.service.js';
// import { CreateProductDto } from './dto/create-product.dto.js';
// import { UpdateProductDto } from './dto/update-product.dto.js';

// @Injectable()
// export class ProductsService {
//   constructor(private prisma: PrismaService) { }

//   async findAll() {
//     return this.prisma.product.findMany();
//   }

//   async findOne(idInput: number) {
//     return this.prisma.product.findUnique({
//       where: {
//         id: idInput
//       }
//     })
//   }

//   // async filterWithKeyword(keyword: string) {
//   //   const keywords = keyword.split(' ');
//   //   console.log(keywords);

//   //   const product = await this.prisma.product.findMany({
//   //     where: {
//   //       AND: [
//   //         ...keywords.map((kw) => ({
//   //           name: {
//   //             contains: kw,
//   //             mode: 'insensitive' as const,
//   //           },
//   //         })),
//   //         {
//   //           sale_price: {
//   //             gt: 20,
//   //           }
//   //         }
//   //       ],
//   //     },
//   //     select: {
//   //       name: true,
//   //       sale_price: true,
//   //     }
//   //   })

//   //   return product;
//   // }

//   // async findHighestPrice() {
//   //   const product = await this.prisma.product.findFirst({
//   //     orderBy: {
//   //       sale_price: {
//   //         sort: 'desc',
//   //         nulls: 'last'
//   //       }
//   //     },
//   //   })

//   //   return product;
//   // }

//   async create(createProductDto: CreateProductDto) {
//     return this.prisma.product.create({
//       data: {
//         name: createProductDto.name,
//         sale_price: createProductDto.sale_price
//       }
//     })
//   }

//   async update(id: number, updateProductDto: UpdateProductDto) {
//     const product = await this.prisma.product.update({
//       where: {
//         id: id,
//       },
//       data: {
//         name: updateProductDto.name,
//         sale_price: updateProductDto.sale_price
//       }
//     });

//     return product;
//   }

//   async updateManyPriceByName(name: string, sale_price: number = 0) {
//     const result = await this.prisma.product.updateMany({
//       where: {
//         name: name,
//       },
//       data: {
//         sale_price: sale_price,
//       },
//     })
//   }

//   async updateIncreasePrice(id: number) {
//     await this.prisma.product.updateMany({
//       where: {
//         id: id
//       },
//       data: {
//         sale_price: {
//           increment: 20
//         },
//         name: {
//           // set: 'da tang'
//         }
//       }
//     })
//   }

//   async deleteById(id: number) {
//     await this.prisma.product.delete({
//       where: {
//         id: id
//       },
//     })
//   }

//   async pagination(page: number, limit: number) {
//     const [products, total] = await Promise.all([
//       this.prisma.product.findMany({
//         skip: (page - 1) * limit,
//         take: limit,
//         orderBy: {
//           id: 'asc',
//         },
//       }),

//       this.prisma.product.count(),
//     ]);

//     return {
//       data: products,
//       meta: {
//         page,
//         limit,
//         total,
//         totalPages: Math.ceil(total / limit)
//       }
//     };
//   }

//   async pgn(pageCurrent: number, limitRecords: number) {
//     const skipPages = (pageCurrent - 1) * limitRecords;

//     const [products, totalRecords] = await Promise.all([
//       this.prisma.product.findMany({
//         take: limitRecords,
//         skip: skipPages,
//       }), 

//       this.prisma.product.count(),
//     ]);

//     return {
//       data: products,
//       meta: {
//         pageCurrent,
//         limitRecords,
//         totalRecords,
//         totalPages: Math.ceil(totalRecords / limitRecords),
//       }
//     }
//   }
// }

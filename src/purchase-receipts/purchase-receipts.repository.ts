import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service.js';
import { STATUS } from '../generated/prisma/enums.js';
import { CreatePurchaseReceiptDto } from './dto/create-purchase_receipt.dto.js';
import { UpdatePurchaseReceiptItemDto } from '../purchase-receipt-items/dto/update-purchase-receipt-item.dto.js';
import { UpdateStatusPurchaseReceiptDto } from './dto/update-purchase_receipt.dto.js';

@Injectable()
export class PurchaseReceiptsRepository {
  constructor(private readonly prisma: PrismaService) { }

  // GET methods 
  async findAll() {
    return this.prisma.purchaseReceipt.findMany();
  }

  async findById(id: number) {
    return this.prisma.purchaseReceipt.findFirst({
      where: {
        id: id,
      }
    });
  }

  // POST methods 
  async create(dto: CreatePurchaseReceiptDto) {
    return this.prisma.purchaseReceipt.create({
      data: {
        supplierId: dto.supplierId,
        status: STATUS.DRAFT,
        receivedAt: null,
        createdAt: new Date(),

        // create purcharse-receipt-item: product - price_input - quantity
        purchaseReceiptItems: {
          create: dto.items?.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: {
        purchaseReceiptItems: true,
      },
    });
  }

  async updateStatus(id: number, dto: UpdateStatusPurchaseReceiptDto) {
    return this.prisma.purchaseReceipt.update({
      data: {
        status: dto.status,
      },
      where: {
        id: id,
      }
    })
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service.js';
import { STATUS } from '../generated/prisma/enums.js';
import { CreatePurchaseReceiptDto } from './dto/create-purchase_receipt.dto.js';
import { UpdateStatusPurchaseReceiptDto } from './dto/update-purchase_receipt.dto.js';
import { Prisma } from '../generated/prisma/client.js';

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

  // xac nhan nhap kho:
  // 1. kiem tra ton tai phieu nhap?
  async findReceiptForConfirm(tx: Prisma.TransactionClient, id: number) {
    return tx.purchaseReceipt.findUnique({
      where: { id: id },
      include: { purchaseReceiptItems: true },
    })
  }

  // 2. xac nhan va cap nhat
  async confirmReceipt(tx: Prisma.TransactionClient, id: number) {
    return tx.purchaseReceipt.update({
      where: { id: id },
      data: {
        status: STATUS.CONFIRMED,
        receivedAt: new Date(),
      }
    })
  }

  // 3. cap nhat kho 
  async updateInventory(tx: Prisma.TransactionClient, productId: number, quantity: number) {
    return tx.inventory.upsert({
      where: { productId },
      update: {
        stock: {
          increment: quantity,
        }
      },
      create: {
        productId,
        stock: quantity,
      }
    })
  }
}

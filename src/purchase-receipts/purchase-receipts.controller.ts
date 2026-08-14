import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { PurchaseReceiptsService } from './purchase-receipts.service.js';
import { CreatePurchaseReceiptDto } from './dto/create-purchase_receipt.dto.js';
import { UpdateStatusPurchaseReceiptDto } from './dto/update-purchase_receipt.dto.js';

@Controller('purchase-receipts')
export class PurchaseReceiptsController {
  constructor(private readonly purchaseReceiptsService: PurchaseReceiptsService) { }

  // GET methods
  @Get()
  async findAll() {
    return this.purchaseReceiptsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    return this.purchaseReceiptsService.findById(id);
  }

  // POST methods 
  @Post()
  async create(@Body() dto: CreatePurchaseReceiptDto) {
    return this.purchaseReceiptsService.create(dto);
  }

  @Post(':id/confirm')
  async confirm(@Param('id', ParseIntPipe) id: number) {
    return this.purchaseReceiptsService.confirmReceipt(id);
  }

  // PUT 
  @Patch(':id/status')
  async updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateStatusPurchaseReceiptDto
  ) {
    return this.purchaseReceiptsService.updateStatus(id, dto);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchaseReceiptItemsService } from './purchase-receipt-items.service.js';
import { CreatePurchaseReceiptItemDto } from './dto/create-purchase-receipt-item.dto.js';
import { UpdatePurchaseReceiptItemDto } from './dto/update-purchase-receipt-item.dto.js';

@Controller('purchase-receipt-items')
export class PurchaseReceiptItemsController {
  constructor(private readonly purchaseReceiptItemsService: PurchaseReceiptItemsService) {}

  @Post()
  create(@Body() createPurchaseReceiptItemDto: CreatePurchaseReceiptItemDto) {
    return this.purchaseReceiptItemsService.create(createPurchaseReceiptItemDto);
  }

  @Get()
  findAll() {
    return this.purchaseReceiptItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseReceiptItemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePurchaseReceiptItemDto: UpdatePurchaseReceiptItemDto) {
    return this.purchaseReceiptItemsService.update(+id, updatePurchaseReceiptItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseReceiptItemsService.remove(+id);
  }
}

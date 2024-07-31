import { UpdateProductDto } from './proDto/update-product.dto';
import { Product } from './../entities/product.entity';
import { CreateProductDto } from './proDto/create-product.dto';
import {
  Body,
  Controller,
  ParseIntPipe,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Post() // Post/products
  create(@Body(ValidationPipe) createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }
  @Get() // GET /Users or users?role=value
  findAll() {
    return this.productsService.findAll();
  }
  @Get(':productId') // Get/products/:id
  findOne(@Param('productId', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }
  @Patch(':productId') // PATCH/products/:id
  update(
    @Param('productId', ParseIntPipe) productId: number,
    @Body(ValidationPipe) updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(productId, updateProductDto);
  }
  @Delete(':productId') // DELETE/users/:id
  delete(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.delete(productId);
  }
}

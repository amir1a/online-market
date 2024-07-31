import { UpdateProductDto } from './proDto/update-product.dto';
import { Product } from './../entities/product.entity';
import { CreateProductDto } from './proDto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product: Product = this.productRepository.create(createProductDto);
    await this.productRepository.insert(product);
    return product;
  }
  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(productId: number): Promise<Product> {
    return this.productRepository.findOne({ where: { productId } });
  }

  update(productId: number, updateProductDto: Partial<UpdateProductDto>) {
    return this.productRepository.update(productId, updateProductDto);
  }
  delete(productId: number) {

    return this.productRepository.delete(productId);
  }
}

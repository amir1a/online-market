import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity('order')
export class Order {
  @PrimaryGeneratedColumn()
  orderId: number;

  @ManyToMany(() => Product, (product) => product.orders)
  products: Product[]; 

  @Column()
  totalPrice: number;
}
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Order } from './order.entity';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  productId: number;
  @Column()
  name: string;
  @Column()
  price: number;
  @ManyToMany(() => Order, (order) => order.products)
  @JoinTable()
  orders: Order[];
}

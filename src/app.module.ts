import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Order } from './entities/order.entity';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { EmailsModule } from './emails/emails.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1035',
      database: 'store',
      entities: [Product, Order],
      synchronize: true,
    }),
    ProductsModule,
    OrdersModule,
    EmailsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/entities/order.entity';
import { EmailsModule } from 'src/emails/emails.module';
@Module({
  imports: [TypeOrmModule.forFeature([Order, EmailsModule])],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}

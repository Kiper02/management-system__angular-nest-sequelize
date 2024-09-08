import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Payment } from './payment.model';
import { User } from 'src/user/user.model';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [PaymentController],
  providers: [PaymentService, JwtService],
  imports: [
    SequelizeModule.forFeature([Payment, User])
  ]
})
export class PaymentModule {}

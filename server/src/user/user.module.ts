import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Link } from 'src/link/link.model';
import { Payment } from 'src/payment/payment.model';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [UserController],
  providers: [UserService, JwtService],
  imports: [
    SequelizeModule.forFeature([User, Link, Payment]),
  ],
  exports: [UserService]
})
export class UserModule {}

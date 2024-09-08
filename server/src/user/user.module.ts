import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Link } from 'src/link/link.model';
import { Payment } from 'src/payment/payment.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    SequelizeModule.forFeature([User, Link, Payment]),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'aisukghdbsoqp',
      signOptions: {
        expiresIn: '24h'
      }
    })
  ],
  exports: [UserService]
})
export class UserModule {}

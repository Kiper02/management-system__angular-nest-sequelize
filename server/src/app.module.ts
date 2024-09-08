import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/user.model';
import { LinkModule } from './link/link.module';
import { Link } from './link/link.model';
import { PaymentModule } from './payment/payment.module';
import { Payment } from './payment/payment.model';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: './src/DB/db.sqlite',
      autoLoadModels: true,
      models: [User, Link, Payment],
      sync: {force: true}
    }),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY,
      signOptions: {
        expiresIn: '24h'
      }
    }),
    UserModule,
    LinkModule,
    PaymentModule,
  ],
})
export class AppModule {
  constructor() {
    console.log('Private Key:', process.env.PRIVATE_KEY);
  }
}

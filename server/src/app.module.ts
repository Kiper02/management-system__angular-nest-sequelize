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

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: './src/DB/db.sqlite',
      autoLoadModels: true,
      models: [User, Link, Payment],
      sync: {force: true}
    }),
    UserModule,
    LinkModule,
    PaymentModule,
  ],
})
export class AppModule {}

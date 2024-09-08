import { Module } from '@nestjs/common';
import { LinkController } from './link.controller';
import { LinkService } from './link.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Link } from './link.model';
import { User } from 'src/user/user.model';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [LinkController],
  providers: [LinkService, JwtService],
  imports: [
    SequelizeModule.forFeature([Link, User])
  ]
})
export class LinkModule {}

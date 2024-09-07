import { Module } from '@nestjs/common';
import { LinkController } from './link.controller';
import { LinkService } from './link.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Link } from './link.model';
import { User } from 'src/user/user.model';

@Module({
  controllers: [LinkController],
  providers: [LinkService],
  imports: [
    SequelizeModule.forFeature([Link, User])
  ]
})
export class LinkModule {}

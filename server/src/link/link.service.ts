import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Link } from './link.model';
import { v4 as uuidv4 } from 'uuid'
import { CreateLinkDto } from './dto/create-link-dto';

@Injectable()
export class LinkService {

    constructor(@InjectModel(Link) private linkModel: typeof Link) {}

    async generateLink(id: number) {
        const link = `${id}@${uuidv4()}`
        console.log(link);
        const candidate = await this.linkModel.findOne({where: {userId: id}})
        console.log(candidate);
        if(candidate) {
            throw new HttpException('У пользователя уже есть ссылка', HttpStatus.BAD_REQUEST)
        }
        const model = await this.linkModel.create({link, userId: id});
        return model
    }

    async getLink(id: number) {
        const link = await this.linkModel.findOne({where: {userId: id}});
        if(link) {
            return link;
        } else {
            throw new HttpException('У пользователя нет ссылки приглашения', HttpStatus.BAD_REQUEST)
        }
    }
}

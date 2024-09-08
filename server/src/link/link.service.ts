import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Link } from './link.model';
import { v4 as uuidv4 } from 'uuid'
import { CreateLinkDto } from './dto/create-link-dto';

@Injectable()
export class LinkService {

    constructor(@InjectModel(Link) private linkModel: typeof Link) {}

    async generateLink(dto: CreateLinkDto) {
        const link = `http://localhost:5000/user/${dto}=${uuidv4()}`
        const model = await this.linkModel.create({link});
        return model
    }
}

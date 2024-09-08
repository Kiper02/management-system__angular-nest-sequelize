import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Link } from './link.model';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class LinkService {

    constructor(@InjectModel(Link) private linkModel: typeof Link) {}

    async generateLink(id: string) {
        console.log('controller');
        const link = `http://localhost:5000/user/${id}=${uuidv4()}`
        console.log(link);
        const model = await this.linkModel.create({link});
        return model
    }
}

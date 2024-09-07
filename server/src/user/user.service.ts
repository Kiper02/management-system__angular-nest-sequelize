import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { Link } from 'src/link/link.model';
import { Op } from 'sequelize';

@Injectable()
export class UserService {

    constructor(@InjectModel(User) private userModel: typeof User) {}

    async registration(dto: CreateUserDto) {
        const user = await this.userModel.create(dto);
        return user;
    }

    async registrationByInvtitation(dto: CreateUserDto, link: string) {
        const referId = Number(link.split('=')[0])
        const user = await this.userModel.create({...dto, referId})
        return user;
    }


    async getStatisticsAll() {
        const count = await this.userModel.count({where: {referId: {[Op.ne]: null}}})
        return count
    }

    async getStatisticsByUser(referId: string) {
        const count = await this.userModel.count({where: {referId: Number(referId)}})
        return count
    }
}

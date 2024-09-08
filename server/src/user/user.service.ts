import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { Op } from 'sequelize';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { LoginDto } from './dto/login-dto';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User) private userModel: typeof User,
        private jwtService: JwtService
    ) {}

    async registration(createUserDto: CreateUserDto) {
        await this.checkCandidate(createUserDto.email);
        const hashPassword = await bcrypt.hash(createUserDto.password, 4);
        const user = await this.userModel.create({...createUserDto, password: hashPassword});
        return this.generateToken(user);
    }

    async registrationByInvtitation(createUserDto: CreateUserDto, link: string) {
        const referId = Number(link.split('=')[0])
        await this.checkCandidate(createUserDto.email);
        const hashPassword = await bcrypt.hash(createUserDto.password, 4);
        const user = await this.userModel.create({...createUserDto, password: hashPassword, referId})
        return this.generateToken(user);
    }

    async login(loginDto: LoginDto) {
        const user = await this.validateUser(loginDto);
        return this.generateToken(user);
    }


    async getStatisticsAll() {
        const count = await this.userModel.count({where: {referId: {[Op.ne]: null}}})
        return count
    }

    async getStatisticsByUser(referId: string) {
        const count = await this.userModel.count({where: {referId: Number(referId)}})
        return count
    }

    async getUserByEmail(email: string) {
        const user = await this.userModel.findOne({where: {email}})
        return user;
    }

    async generateToken(user: User) {
        const payload = {id: user.id, email: user.email}
        return({token: this.jwtService.sign(payload, {secret: process.env.PRIVATE_KEY})}); 
    }

    async checkCandidate(email) {
        const candidate = await this.userModel.findOne({where: {email}})
        if(candidate) {
            throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST)
        }
    }

    private async validateUser(loginDto: LoginDto) {
        const user = await this.getUserByEmail(loginDto.email);
        if(!user) {
            throw new HttpException('Пользователя с таким email не существует', HttpStatus.BAD_REQUEST)
        }
        const passwordEquals = await bcrypt.compare(loginDto.password, user.password);
        if(user && passwordEquals) {
            return user;
        }
        throw new UnauthorizedException({message: 'Некорректный email и пароль'})
    }
}

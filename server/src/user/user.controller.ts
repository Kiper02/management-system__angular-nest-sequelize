import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post() 
    registration(@Body() dto: CreateUserDto) {
        return this.userService.registration(dto);
    }

    @Post(':link')
    registrationByInvtitation(@Body() dto: CreateUserDto, @Param('link') linkRef: string) {
        return this.userService.registrationByInvtitation(dto, linkRef)
    }

    @Get('statistics')
    getStatisticsAll() {
        return this.userService.getStatisticsAll();
    }

    @Get('statistics/:id')
    getStatisticsByUser(@Param('id') referId: string) {
        return this.userService.getStatisticsByUser(referId)
    }
}

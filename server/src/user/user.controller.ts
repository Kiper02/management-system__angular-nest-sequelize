import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UserService } from './user.service';
import { ReferDto } from './dto/refer-dto';
import { AuthGuard } from 'src/guards/auth-guard';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('registration') 
    registration(@Body() createUserdto: CreateUserDto) {
        return this.userService.registration(createUserdto);
    }

    @Post('registration/:link')
    registrationByInvtitation(@Body() createUserdto: CreateUserDto, @Param('link') referDto: ReferDto) {
        return this.userService.registrationByInvtitation(createUserdto, referDto.linkRef)
    }

    @Post('login')
    login(@Body() createUserDto: CreateUserDto) {
        return this.userService.login(createUserDto);
    }

    @UseGuards(AuthGuard)
    @Get('statistics')
    getStatisticsAll() {
        return this.userService.getStatisticsAll();
    }

    @UseGuards(AuthGuard)
    @Get('statistics/:id')
    getStatisticsByUser(@Param('id') referDto: ReferDto) {
        return this.userService.getStatisticsByUser(referDto.referId)
    }
}

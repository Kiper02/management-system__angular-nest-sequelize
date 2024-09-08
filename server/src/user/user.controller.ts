import { Body, Controller, Get, Param, Post, UseGuards, UsePipes } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UserService } from './user.service';
import { ReferDto } from './dto/refer-dto';
import { AuthGuard } from 'src/guards/auth-guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TokenResponseDto } from './dto/token-response-dto';
import { ValidationPipe } from 'src/pipes/validation/validation.pipe';

@ApiTags('Пользователи')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @ApiOperation({summary: 'Регистрация пользователя'})
    @ApiResponse({status: 200, type: TokenResponseDto})
    @UsePipes(ValidationPipe)
    @Post('registration') 
    registration(@Body() createUserdto: CreateUserDto) {
        return this.userService.registration(createUserdto);
    }

    @ApiOperation({summary: 'Регистрация пользователя по приглашению'})
    @ApiResponse({status: 200, type: TokenResponseDto})
    @UsePipes(ValidationPipe)
    @Post('registration/:link')
    registrationByInvtitation(@Body() createUserdto: CreateUserDto, @Param('link') referDto: ReferDto) {
        return this.userService.registrationByInvtitation(createUserdto, referDto.linkRef)
    }

    @ApiOperation({summary: 'Авторизация пользователя'})
    @ApiResponse({status: 200, type: TokenResponseDto})
    @UsePipes(ValidationPipe)
    @Post('login')
    login(@Body() createUserDto: CreateUserDto) {
        return this.userService.login(createUserDto);
    }

    @ApiOperation({summary: 'Количество всех приглашенных пользователей'})
    @ApiResponse({status: 200, type: '0'})
    @UseGuards(AuthGuard)
    @Get('statistics')
    getStatisticsAll() {
        return this.userService.getStatisticsAll();
    }

    @UsePipes(ValidationPipe)
    @ApiOperation({summary: 'Количество приглашенных пользователей одним пользователем'})
    @ApiResponse({status: 200, type: '0'})
    @UseGuards(AuthGuard)
    @Get('statistics/:id')
    getStatisticsByUser(@Param('id') referDto: ReferDto) {
        return this.userService.getStatisticsByUser(referDto.referId)
    }
}

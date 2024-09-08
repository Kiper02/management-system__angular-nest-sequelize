import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { LinkService } from './link.service';
import { CreateLinkDto } from './dto/create-link-dto';
import { AuthGuard } from 'src/guards/auth-guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Link } from './link.model';

@ApiTags('Ссылки для приглашения')
@Controller('link')
export class LinkController {
    constructor(private linkService: LinkService) {}

    @ApiOperation({summary: 'Генерация ссылки'})
    @ApiResponse({status: 200, type: Link})
    @UseGuards(AuthGuard)
    @Post()
    generateLink(@Body('id') id: number) {
        console.log(id);
        return this.linkService.generateLink(id)
    }

    @ApiOperation({summary: 'Получение ссылки'})
    @UseGuards(AuthGuard)
    @Get(':id')
    getLink(@Param('id') id: string) {
        return this.linkService.getLink(Number(id))
    }
}

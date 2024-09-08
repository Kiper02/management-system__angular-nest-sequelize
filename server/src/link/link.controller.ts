import { Controller, Param, Post, UseGuards } from '@nestjs/common';
import { LinkService } from './link.service';
import { CreateLinkDto } from './dto/create-link-dto';
import { AuthGuard } from 'src/guards/auth-guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Link } from './link.model';

@ApiTags('Ссылки для приглашения')
@Controller(':id/link')
export class LinkController {
    constructor(private linkService: LinkService) {}

    @ApiOperation({summary: 'Генерация ссылки'})
    @ApiResponse({status: 200, type: Link})
    @UseGuards(AuthGuard)
    @Post()
    generateLink(@Param('id') dto: CreateLinkDto) {
        return this.linkService.generateLink(dto.id)
    }
}

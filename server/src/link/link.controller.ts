import { Controller, Param, Post, UseGuards } from '@nestjs/common';
import { LinkService } from './link.service';
import { CreateLinkDto } from './dto/create-link-dto';
import { AuthGuard } from 'src/guards/auth-guard';

@Controller(':id/link')
export class LinkController {
    constructor(private linkService: LinkService) {}

    @UseGuards(AuthGuard)
    @Post()
    generateLink(@Param('id') dto: CreateLinkDto) {
        return this.linkService.generateLink(dto.id)
    }
}

import { Controller, Param, Post } from '@nestjs/common';
import { LinkService } from './link.service';

@Controller(':id/link')
export class LinkController {
    constructor(private linkService: LinkService) {}

    @Post()
    generateLink(@Param('id') id: string) {
        return this.linkService.generateLink(id)
    }
}

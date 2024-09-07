import { Controller, Get, Param } from '@nestjs/common';
import { InvitationLinkService } from './invitation-link.service';

@Controller(':id/invitation-link')
export class InvitationLinkController {
    constructor(private linkService: InvitationLinkService) {}

    @Get()
    getLink(@Param('id') id: string) {
        return this.linkService.getLink(id)
    }
}

import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class InvitationLinkService {

    getLink(id: string) {
        const link = `${id}/${uuidv4()}`
        return link;
    }
}

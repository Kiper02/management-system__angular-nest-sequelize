import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvitationLinkController } from './invitation-link/invitation-link.controller';
import { InvitationLinkService } from './invitation-link/invitation-link.service';
import { InvitationLinkModule } from './invitation-link/invitation-link.module';

@Module({
  imports: [InvitationLinkModule],
  controllers: [AppController, InvitationLinkController],
  providers: [AppService, InvitationLinkService],
})
export class AppModule {}

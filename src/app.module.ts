import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaintServiceService } from './paint-service/paint-service.service';
import { WhatIsThisModule } from './what-is-this/what-is-this.module';

@Module({
  imports: [WhatIsThisModule],
  controllers: [AppController],
  providers: [AppService, PaintServiceService],
})
export class AppModule {}

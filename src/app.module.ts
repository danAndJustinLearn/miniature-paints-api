import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaintServiceService } from './paint-service/paint-service.service';
import { WhatIsThisModule } from './what-is-this/what-is-this.module';
import { PaintsModule } from './paints/paints.module';

@Module({
  imports: [WhatIsThisModule, PaintsModule],
  controllers: [AppController],
  providers: [AppService, PaintServiceService],
})
export class AppModule {}

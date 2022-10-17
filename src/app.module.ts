import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PaintServiceService } from './paint-service/paint-service.service';
import { WhatIsThisModule } from './what-is-this/what-is-this.module';

@Module({
  imports: [
    WhatIsThisModule,
    MongooseModule.forRoot('mongodb://localhost/nest')
  ],
  controllers: [AppController],
  providers: [AppService, PaintServiceService],
})
export class AppModule {}

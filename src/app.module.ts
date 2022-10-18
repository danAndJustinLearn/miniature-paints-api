import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ModelsController } from './models/models.controller'
import { ModelsService } from './models/models.service';

@Module({
  imports: [],
  controllers: [AppController, ModelsController],
  providers: [AppService, ModelsService],
})
export class AppModule {}

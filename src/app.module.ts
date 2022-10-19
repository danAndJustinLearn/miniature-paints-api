import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModelsController } from './models/models.controller'
import { ModelModule } from './models/models.module';
import { ModelsService } from './models/models.service';


@Module({
  imports: [ModelModule],
  controllers: [AppController, ModelsController],
  providers: [AppService, ModelsService],
})
export class AppModule {}

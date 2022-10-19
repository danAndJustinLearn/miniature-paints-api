import { Module } from '@nestjs/common';
import { ModelsService } from './models.service';
import { modelProviders } from './model.providers';
import { DatabaseModule } from 'database.module';


@Module({
    imports: [DatabaseModule],
    providers: [
        ...modelProviders,
        ModelsService
    ],
})
export class ModelModule {}
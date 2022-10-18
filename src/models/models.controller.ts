import { Controller, Get } from '@nestjs/common';
import { ModelsService } from './models.service';
import { Model } from './interfaces/model.interface';

@Controller('models')
export class ModelsController {
    constructor(private modelsService: ModelsService) {}

    @Get()
    async findAll(): Promise<Model[]> {
        return this.modelsService.findAll()
    }
}
import { Injectable } from '@nestjs/common';
import { Model } from './interfaces/model.interface';

@Injectable()
export class ModelsService {
    private readonly models: Model[] = [{
        brandName: 'test',
        colorName: 'Red',
        artistColorName: 'test',
        paintId: 1234,
        price: 100
    }];

    findAll(): Model[] {
        return this.models
    }
}
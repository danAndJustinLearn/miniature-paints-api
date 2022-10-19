import { Injectable, Inject } from '@nestjs/common';
import { Model } from './model.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ModelsService {
    constructor(
        @Inject('MODEL_REPOSITORY')
        private modelRepository: Repository<Model>,
    ) {}

    findAll(): Promise<Model[]> {
        return this.modelRepository.find();
    }
}
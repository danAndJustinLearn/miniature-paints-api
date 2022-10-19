import { DataSource } from "typeorm";
import { Model } from './model.entity';

export const modelProviders = [
    {
        provide: 'MODEL_REPOSITORY',
        useFactory: (DataSource: DataSource) => DataSource.getRepository(Model),
        inject: ['DATA_SOURCE'],
    }
];

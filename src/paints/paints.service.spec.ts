import { Test, TestingModule } from '@nestjs/testing';
import { PaintsService } from './paints.service';

describe('PaintsService', () => {
  let service: PaintsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaintsService],
    }).compile();

    service = module.get<PaintsService>(PaintsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

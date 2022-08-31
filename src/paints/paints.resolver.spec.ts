import { Test, TestingModule } from '@nestjs/testing';
import { PaintsResolver } from './paints.resolver';
import { PaintsService } from './paints.service';

describe('PaintsResolver', () => {
  let resolver: PaintsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaintsResolver, PaintsService],
    }).compile();

    resolver = module.get<PaintsResolver>(PaintsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

import { Module } from '@nestjs/common';
import { PaintsService } from './paints.service';
import { PaintsResolver } from './paints.resolver';

@Module({
  providers: [PaintsResolver, PaintsService]
})
export class PaintsModule {}

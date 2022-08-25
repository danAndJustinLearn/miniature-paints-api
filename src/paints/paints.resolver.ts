import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PaintsService } from './paints.service';
import { CreatePaintInput } from './dto/create-paint.input';
import { UpdatePaintInput } from './dto/update-paint.input';

@Resolver('Paint')
export class PaintsResolver {
  constructor(private readonly paintsService: PaintsService) {}

  @Mutation('createPaint')
  create(@Args('createPaintInput') createPaintInput: CreatePaintInput) {
    return this.paintsService.create(createPaintInput);
  }

  @Query('paints')
  findAll() {
    return this.paintsService.findAll();
  }

  @Query('paint')
  findOne(@Args('id') id: number) {
    return this.paintsService.findOne(id);
  }

  @Mutation('updatePaint')
  update(@Args('updatePaintInput') updatePaintInput: UpdatePaintInput) {
    return this.paintsService.update(updatePaintInput.id, updatePaintInput);
  }

  @Mutation('removePaint')
  remove(@Args('id') id: number) {
    return this.paintsService.remove(id);
  }
}

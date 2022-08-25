import { Injectable } from '@nestjs/common';
import { CreatePaintInput } from './dto/create-paint.input';
import { UpdatePaintInput } from './dto/update-paint.input';

@Injectable()
export class PaintsService {
  create(createPaintInput: CreatePaintInput) {
    return 'This action adds a new paint';
  }

  findAll() {
    return `This action returns all paints`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paint`;
  }

  update(id: number, updatePaintInput: UpdatePaintInput) {
    return `This action updates a #${id} paint`;
  }

  remove(id: number) {
    return `This action removes a #${id} paint`;
  }
}

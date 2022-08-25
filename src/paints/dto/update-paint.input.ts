import { CreatePaintInput } from './create-paint.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePaintInput extends PartialType(CreatePaintInput) {
  id: number;
}

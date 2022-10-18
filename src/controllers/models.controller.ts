import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateModelDto, UpdateModelDto, ListAllEntities } from './dto';

@Controller('models')
export class ModelsController {
    @Post()
    create(@Body() createModelDto: CreateModelDto) {
        return 'This action creates a new model';
    }

    @Get()
    findAll(@Query() query: ListAllEntities) {
        return `This action returns all models(limit: ${query.limit} items)`;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} model`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateModelDto: UpdateModelDto) {
        return `This action updates a #${id} model`;   
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} model`;
    }
}
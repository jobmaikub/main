import { Controller, Delete, Patch, Param, Body, Post, Get } from '@nestjs/common';
import { MajorsService } from './majors.service';

@Controller('majors')
export class MajorsController {
  constructor(private readonly service: MajorsService) {}

  @Post()
  create(@Body() body: { name: string; faculty_id: number }) {
    return this.service.create(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.service.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}


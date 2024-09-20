import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post()
  create() {
    return 'add new song';
  }
  @Get()
  findAll() {
    return 'fetch all songs endpoint';
  }
  @Get(':id')
  findOne(id) {
    return `fetch song with ${+id} endpoint`;
  }
  @Put(':id')
  update(id) {
    return `Update song with ${+id} endpoint`;
  }
  @Delete(':id')
  delete(id) {
    return `Delete song with ${+id} endpoint`;
  }
}

import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create() {
    return this.songsService.create('Moonlight');
  }
  @Get()
  findAll() {
    return this.songsService.findAll();
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

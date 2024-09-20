import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from 'src/dto/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.create(createSongDTO);
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

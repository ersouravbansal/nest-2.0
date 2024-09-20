import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // local array
  private readonly songs = [];
  // save song in db
  create(song) {
    this.songs.push(song);
    return this.songs;
  }
  //fetch songs from db
  findAll() {
    // Error came while fetching data from Db.
    // throw new Error('Error in Db while fetching record');
    return this.songs;
  }
}

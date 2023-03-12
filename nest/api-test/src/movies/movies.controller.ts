import { Controller } from '@nestjs/common';
import {
  Body,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common/decorators';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all';
  }

  // http://localhost:{Port}/movies/search?year=1
  @Get('/search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie with a title: ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  path(@Param('id') movieId: string, @Body() updateData) {
    // return `This will patch a movie with the id: ${movieId}`;
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}

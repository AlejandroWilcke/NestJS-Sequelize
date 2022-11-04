import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import MovieService from '../services/movie.service';
import Movie from '../database/models/Movie.entity';
import { CreateMovieDto } from '../dto/movie.dto';

@Controller('movie')
export default class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: number): Promise<Movie> {
    return this.movieService.findById(id);
  }

  @Post()
  create(@Body() movie: CreateMovieDto): Promise<Movie> {
    return this.movieService.create(movie);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.movieService.delete(id);
  }

}

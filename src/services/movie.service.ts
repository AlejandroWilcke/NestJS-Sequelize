import { Injectable, Inject } from '@nestjs/common';
import Movie from '../database/models/movie.entity';
import { MOVIE_REPOSITORY } from 'src/utils/constants';
import Person from '../database/models/person.entity';

const include = [
  { model: Person, as: 'casting' },
  { model: Person, as: 'directors' },
  { model: Person, as: 'producers' },
]

@Injectable()
export default class MovieService {
  constructor(
    @Inject(MOVIE_REPOSITORY)
    private movieRepository: typeof Movie
  ) {}

  async findAll(): Promise<Movie[]> {
    return this.movieRepository.findAll<Movie>({ include });
  }

  async findById(id): Promise<Movie> {
    return this.movieRepository.findByPk<Movie>(id, { include });
  }

  async create(movie): Promise<Movie> {
    return this.movieRepository.create<Movie>(movie, { include });
  }

  async delete(id): Promise<number> {
    return this.movieRepository.destroy<Movie>({ where: { id } });
  }

}
import Movie from '../database/models/movie.entity';
import { MOVIE_REPOSITORY } from '../utils/constants';

const movieProviders = [
  {
    provide: MOVIE_REPOSITORY,
    useValue: Movie,
  },
];

export default movieProviders;
import Movie from '../interfaces/movie.interface';

export class CreatePersonDto {
  name: string;
  lastName: number;
  age: number;
  moviesAsActor: [Movie];
  moviesAsDirector: [Movie];
  moviesAsProducer: [Movie];
}
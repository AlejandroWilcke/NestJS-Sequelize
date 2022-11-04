import Person from '../interfaces/person.interface';

export class CreateMovieDto {
  title: string;
  year: number;
  casting: [Person];
  directors: [Person];
  producers: [Person];
}
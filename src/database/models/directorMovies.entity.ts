import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import Movie from './movie.entity';
import Person from './person.entity';

@Table
class DirectorMovies extends Model {
  @ForeignKey(() => Movie)
  @Column
  movieId: number;

  @ForeignKey(() => Person)
  @Column
  personId: number;
}

export default DirectorMovies;
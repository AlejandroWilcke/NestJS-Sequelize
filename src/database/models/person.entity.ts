import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript';
import Movie from './movie.entity';
import ActorMovies from './actorMovies.entity';
import DirectorMovies from './directorMovies.entity';
import ProducerMovies from './producerMovies.entity';

@Table
export default class Person extends Model {

  @Column
  name: string;

  @Column
  lastName: string;

  @Column
  age: number;

  @BelongsToMany(() => Movie, () => ActorMovies)
  moviesAsActor: Movie[];

  @BelongsToMany(() => Movie, () => DirectorMovies)
  moviesAsDirector: Movie[];
  
  @BelongsToMany(() => Movie, () => ProducerMovies)
  moviesAsProducer: Movie[];

}
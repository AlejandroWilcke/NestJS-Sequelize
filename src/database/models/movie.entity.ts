import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript';
import Person from './person.entity';
import ActorMovies from './actorMovies.entity';
import DirectorMovies from './directorMovies.entity';
import ProducerMovies from './producerMovies.entity';

@Table
export default class Movie extends Model {

  @Column
  title: string;

  @Column
  year: number;

  @BelongsToMany(() => Person, () => ActorMovies)
  casting: Person[];

  @BelongsToMany(() => Person, () => DirectorMovies)
  directors: Person[];

  @BelongsToMany(() => Person, () => ProducerMovies)
  producers: Person[];

}
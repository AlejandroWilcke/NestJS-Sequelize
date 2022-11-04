import { Injectable, Inject } from '@nestjs/common';
import Person from '../database/models/person.entity';
import Movie from '../database/models/movie.entity';
import { PERSON_REPOSITORY } from 'src/utils/constants';

const include = [
  { model: Movie, as: 'moviesAsActor' },
  { model: Movie, as: 'moviesAsDirector' },
  { model: Movie, as: 'moviesAsProducer' },
]

@Injectable()
export default class PersonService {
  constructor(
    @Inject(PERSON_REPOSITORY)
    private personRepository: typeof Person
  ) {}

  async findAll(): Promise<Person[]> {
    return this.personRepository.findAll<Person>({ include });
  }

  async findById(id): Promise<Person> {
    return this.personRepository.findByPk<Person>(id, { include });
  }

  async create(person): Promise<Person> {
    return this.personRepository.create<Person>(person, { include });
  }

  async delete(id): Promise<number> {
    return this.personRepository.destroy<Person>({ where: { id } });
  }
}
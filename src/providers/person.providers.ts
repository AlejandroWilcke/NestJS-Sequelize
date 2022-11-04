import Person from '../database/models/person.entity';
import { PERSON_REPOSITORY } from '../utils/constants';

const personProviders = [
  {
    provide: PERSON_REPOSITORY,
    useValue: Person,
  },
];

export default personProviders;
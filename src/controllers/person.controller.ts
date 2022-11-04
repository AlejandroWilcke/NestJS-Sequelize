import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import PersonService from '../services/person.service';
import Person from '../database/models/person.entity';
import { CreatePersonDto } from '../dto/person.dto';

@Controller('person')
export default class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  findAll(): Promise<Person[]> {
    return this.personService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: number): Promise<Person> {
    return this.personService.findById(id);
  }

  @Post()
  create(@Body() person: CreatePersonDto): Promise<Person> {
    return this.personService.create(person);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.personService.delete(id);
  }
  
}

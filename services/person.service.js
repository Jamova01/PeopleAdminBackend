const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class PersonService {
  constructor() {}

  async create(data) {
    const newPerson = await models.Person.create(data);
    return newPerson;
  }

  async find() {
    const people = await models.Person.findAll();
    return people;
  }

  async findOne(id) {
    const person = await models.Person.findByPk(id, {
      include: ['tasks'],
    });
    if (!person) {
      throw boom.notFound('Person not found');
    }
    return person;
  }

  async update(id, changes) {
    const person = await this.findOne(id);
    const response = await person.update(changes);
    return response;
  }

  async delete(id) {
    const person = await this.findOne(id);
    await person.destroy();
    return { id };
  }
}

module.exports = PersonService;

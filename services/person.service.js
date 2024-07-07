const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class PersonService {
  constructor() {}

  async create(data) {
    try {
      const newPerson = await models.Person.create(data);
      return newPerson;
    } catch (error) {
      throw boom.badImplementation('Error creating person', error);
    }
  }

  async find() {
    try {
      const people = await models.Person.findAll();
      return people;
    } catch (error) {
      throw boom.badImplementation('Error finding people', error);
    }
  }

  async findOne(id) {
    try {
      const person = await models.Person.findByPk(id, {
        include: ['tasks'],
      });
      if (!person) {
        throw boom.notFound('Person not found');
      }
      return person;
    } catch (error) {
      throw boom.badImplementation('Error finding person', error);
    }
  }

  async update(id, changes) {
    try {
      const person = await this.findOne(id);
      const response = await person.update(changes);
      return response;
    } catch (error) {
      throw boom.badImplementation('Error updating person', error);
    }
  }

  async delete(id) {
    try {
      const person = await this.findOne(id);
      await person.destroy();
      return { id };
    } catch (error) {
      throw boom.badImplementation('Error deleting person', error);
    }
  }
}

module.exports = PersonService;

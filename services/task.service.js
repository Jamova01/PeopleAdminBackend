const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class TaskService {
  constructor() {}

  async create(data) {
    try {
      const newTask = await models.Task.create(data);
      return newTask;
    } catch (error) {
      throw boom.badImplementation('Error creating task', error);
    }
  }

  async find() {
    try {
      const tasks = await models.Task.findAll({
        include: ['person'],
      });
      return tasks;
    } catch (error) {
      throw boom.badImplementation('Error finding tasks', error);
    }
  }

  async findOne(id) {
    try {
      const task = await models.Task.findByPk(id);
      if (!task) {
        throw boom.notFound('task not found');
      }
      return task;
    } catch (error) {
      throw boom.badImplementation('Error finding task', error);
    }
  }

  async update(id, changes) {
    try {
      const task = await this.findOne(id);
      const response = await task.update(changes);
      return response;
    } catch (error) {
      throw boom.badImplementation('Error updating task', error);
    }
  }

  async delete(id) {
    try {
      const task = await this.findOne(id);
      await task.destroy();
      return { id };
    } catch (error) {
      throw boom.badImplementation('Error deleting task', error);
    }
  }
}

module.exports = TaskService;

const { Person, PersonSchema } = require('./person.model');
const { Task, TaskSchema } = require('./task.model');

function setupModels(sequelize) {
  Person.init(PersonSchema, Person.config(sequelize));
  Task.init(TaskSchema, Task.config(sequelize));

  Person.assocciate(sequelize.models);
  Task.assocciate(sequelize.models)
}

module.exports = setupModels;

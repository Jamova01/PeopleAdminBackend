'use strict';

const { TASK_TABLE, TaskSchema } = require('../models/task.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(TASK_TABLE, 'tasks_person_id_fkey');
    await queryInterface.addConstraint(TASK_TABLE, {
      fields: ['person_id'],
      type: 'foreign key',
      name: 'tasks_person_id_fkey',
      references: {
        table: 'people',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(TASK_TABLE, 'tasks_person_id_fkey');
    await queryInterface.addConstraint(TASK_TABLE, {
      fields: ['person_id'],
      type: 'foreign key',
      name: 'tasks_person_id_fkey',
      references: {
        table: 'people',
        field: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });
  },
};

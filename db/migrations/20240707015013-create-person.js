'use strict';

const { PERSON_TABLE, PersonSchema } = require('../models/person.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(PERSON_TABLE, PersonSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(PERSON_TABLE);
  },
};

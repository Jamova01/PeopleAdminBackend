const { config } = require('./../config/config');
const { Sequelize } = require('sequelize');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres',
  },
  productions: {
    url: URI,
    dialect: 'postgres',
  },
};

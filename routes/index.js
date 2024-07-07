const express = require('express');

const peopleRouter = require('./people.router');
const tasksRouter = require('./tasks.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/people', peopleRouter);
  router.use('/tasks', tasksRouter);
}

module.exports = routerApi;

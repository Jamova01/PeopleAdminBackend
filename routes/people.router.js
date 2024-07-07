const express = require('express');

const PersonService = require('./../services/person.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
  getPersonSchema,
  createPersonSchema,
  deletePersonSchema,
  updatePersonSchema,
} = require('../schemas/person.schema');

const router = express.Router();
const service = new PersonService();

router.get('/', async (req, res, next) => {
  try {
    const people = await service.find();
    res.json(people);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getPersonSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const person = await service.findOne(id);
      res.json(person);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createPersonSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newPerson = await service.create(body);
      res.status(201).json(newPerson);
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  '/:id',
  validatorHandler(getPersonSchema, 'params'),
  validatorHandler(updatePersonSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const person = await service.update(id, body);
      res.json({ person });
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  '/:id',
  validatorHandler(deletePersonSchema),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;

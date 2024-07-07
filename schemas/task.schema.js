const Joi = require('joi');

const id = Joi.number().integer().required();
const title = Joi.string().required();
const description = Joi.string().required();
const deadline = Joi.date().required();
const person_id = Joi.number().integer().required();

const createTaskSchema = Joi.object({
  title,
  description,
  deadline,
  person_id,
});

const getTaskSchema = Joi.object({
  id,
});

const updateTaskSchema = Joi.object({
  title,
  description,
  deadline,
});

const deleteTaskSchema = Joi.object({
  id,
});

module.exports = {
  createTaskSchema,
  updateTaskSchema,
  getTaskSchema,
  deleteTaskSchema,
};

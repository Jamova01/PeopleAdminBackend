const Joi = require('joi');

const id = Joi.number().integer().required();
const first_name = Joi.string().required();
const second_name = Joi.string().allow(null, '');
const first_lastname = Joi.string().required();
const second_lastname = Joi.string().allow(null, '');
const birthday = Joi.date().required();
const gender = Joi.string().required();
const birth_country = Joi.string().required();
const marital_status = Joi.string().required();
const document_type = Joi.string().required();
const document_number = Joi.string().required();

const createPersonSchema = Joi.object({
  first_name,
  second_name,
  first_lastname,
  second_lastname,
  birthday,
  gender,
  birth_country,
  marital_status,
  document_type,
  document_number,
});

const updatePersonSchema = Joi.object({
  id,
  first_name,
  second_name,
  first_lastname,
  second_lastname,
  birthday,
  gender,
  birth_country,
  marital_status,
  document_type,
  document_number,
}).min(1);

const getPersonSchema = Joi.object({
  id,
});

const deletePersonSchema = Joi.object({
  id,
});

module.exports = {
  createPersonSchema,
  updatePersonSchema,
  getPersonSchema,
  deletePersonSchema,
};

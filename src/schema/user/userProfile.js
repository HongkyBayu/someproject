import Joi from 'joi';

const UserProfileSchema = {
  address: Joi.string().min(3).required(),
  dateOfBirth: Joi.date().max('now'),
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3),
  phoneNumber: Joi.string().regex(/^[0-9]+$/, 'numbers').required(),
};

module.exports = UserProfileSchema;

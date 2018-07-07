import Joi from 'joi';

const UserSchema = {
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

module.exports = UserSchema;

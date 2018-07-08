import Joi from 'joi';

const UserProfileSchema = {
  displayName: Joi.string().min(3),
};

module.exports = UserProfileSchema;

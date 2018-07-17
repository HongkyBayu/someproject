/**
 * Represents the businessProfile Schema
 */
import Joi from 'joi';

const BusinessProfileSchema = {
  businessAddress: Joi.string().min(3).required(),
  locationLatitude: Joi.string().required(),
  locationLongitude: Joi.string().required(),
  businessName: Joi.string().min(3).required(),
  businessType: Joi.string().required(),
};

module.exports = BusinessProfileSchema;

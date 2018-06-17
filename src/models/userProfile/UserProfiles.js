import mongoose from 'mongoose';

const { Schema } = mongoose;

const ResidenceAddressSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
});

const UserProfileSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  residenceAddress: ResidenceAddressSchema,
  phoneNumber: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('userProfile', UserProfileSchema);

import Boom from 'boom';
import UserSchema from '../../../schema/user/userSchema';

const userSignup = async (request, h) => {
  return h.response(request.payload).code(201);
};

module.exports = {
  method: 'POST',
  path: '/user/signup',
  config: {
    handler: userSignup,
    description: 'Signup new user',
    notes: 'Signup user using firebase auth',
    tags: ['api'],
    validate: {
      payload: UserSchema,
    },
  },
}

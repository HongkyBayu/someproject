import firebase from 'firebase';
import UserSchema from '../../../schema/user/userSchema';

const userSigIn = async (request, h) => {
  const { email, password } = request.payload;

  try {
    const loggedUser = await firebase.auth().signInWithEmailAndPassword(email, password);
    return h.response(loggedUser).code(200);
  } catch (error) {
    return h.response(error);
  }
};

module.exports = {
  method: 'POST',
  path: '/user/signin',
  config: {
    handler: userSigIn,
    description: 'Sign-in user',
    notes: 'Sign-in user using firebase auth',
    tags: ['api'],
    validate: {
      payload: UserSchema,
    },
  },
};

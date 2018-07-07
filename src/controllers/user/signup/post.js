import firebase from 'firebase';
import UserSchema from '../../../schema/user/userSchema';

const userSignup = (request, h) => {
  const { email, password } = request.payload;

  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(results => h.response(results).code(201))
    .catch(error => h.response(error).code(400));
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
};

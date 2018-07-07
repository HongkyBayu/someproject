import firebase from 'firebase';
import UserSchema from '../../../schema/user/userSchema';

const sendVerificationEmail = async () => {
  const { currentUser } = firebase.auth();
  try {
    await currentUser.sendEmailVerification();
    console.log('Verification Email Sent');
  } catch (error) {
    console.log(error);
  }
};

const userSignUp = async (request, h) => {
  const { email, password } = request.payload;

  try {
    const registeredUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
    await sendVerificationEmail();
    return h.response(registeredUser).code(201);
  } catch (error) {
    return h.response(error);
  }
};

module.exports = {
  method: 'POST',
  path: '/user/signup',
  config: {
    handler: userSignUp,
    description: 'Sign-up new user',
    notes: 'Sign-up user using firebase auth',
    tags: ['api'],
    validate: {
      payload: UserSchema,
    },
  },
};

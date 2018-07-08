import firebase from 'firebase';
import UserProfileSchema from '../../../schema/user/userProfile';

const updateUserProfile = async (request, h) => {
  const { currentUser } = firebase.auth();

  if (currentUser) {
    const { displayName } = request.payload;
    await currentUser.updateProfile({ displayName });
    return h.response('User profile has been updated').code(200);
  }

  return h.response('No current logged in user found!').code(400);
};

module.exports = {
  method: 'POST',
  path: '/user/profile',
  config: {
    handler: updateUserProfile,
    description: 'Update user displayName profile',
    notes: 'Update user profile displayName with firebase auth',
    tags: ['api'],
    validate: {
      payload: UserProfileSchema,
    },
  },
};

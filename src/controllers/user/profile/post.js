/**
 * Represents the insert user profile routes
 */
import firebase from 'firebase';
import admin from 'firebase-admin';
import Admin from '../../../Admin';
import UserProfileSchema from '../../../schema/user/userProfile';

const insertUserProfile = async (request, h) => {
  const administrator = new Admin(admin);
  const db = administrator.initializeDb();
  const { currentUser } = firebase.auth();
  const userCollection = db.collection('users').doc(currentUser.uid);

  if (currentUser) {
    const {
      address,
      dateOfBirth,
      firstName,
      lastName,
      phoneNumber,
    } = request.payload;

    const displayName = `${firstName} ${lastName}`;

    userCollection.set({
      address,
      dateOfBirth,
      firstName,
      lastName,
      phoneNumber,
    });

    await currentUser.updateProfile({ displayName });
    return h.response('User profile has been updated').code(200);
  }

  return h.response('No current logged in user found!').code(400);
};

module.exports = {
  method: 'POST',
  path: '/user/profile',
  config: {
    handler: insertUserProfile,
    description: 'Insert user displayName profile',
    notes: 'Insert user profile displayName with firebase auth',
    tags: ['api'],
    validate: {
      payload: UserProfileSchema,
    },
  },
};

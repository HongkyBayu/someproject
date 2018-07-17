/**
 * Represents the get profile routes
 */
import firebase from 'firebase';
import admin from 'firebase-admin';
import enrichUserProfile from '../../../transformation/enrichUserProfile';

const userProfile = async (request, h) => {
  const db = admin.firestore();
  const { currentUser } = firebase.auth();

  if (currentUser) {
    const userCollection = db.collection('users').doc(currentUser.uid);
    const getUserProfile = await userCollection.get();
    const profile = getUserProfile.data();
    const enrichedUserProfile = enrichUserProfile(profile, currentUser);

    return h.response(enrichedUserProfile).code(200);
  }

  return h.response('No current user found!').code(400);
};

module.exports = {
  method: 'GET',
  path: '/user/profile',
  config: {
    handler: userProfile,
    description: 'User Profile',
    notes: 'Get user profile with firebase auth',
    tags: ['api'],
  },
};

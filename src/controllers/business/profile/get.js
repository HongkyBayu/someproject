/**
 * Represents the get business profile routes
 */
import firebase from 'firebase';
import admin from 'firebase-admin';

const businessProfile = async (request, h) => {
  const db = admin.firestore();
  const { currentUser } = firebase.auth();

  if (currentUser) {
    const businessCollection = db.collection('business').doc(currentUser.uid);
    const getBusinessProfile = await businessCollection.get();
    const profile = getBusinessProfile.data();

    return h.response(profile).code(200);
  }

  return h.response('No current user found!').code(400);
};

module.exports = {
  method: 'GET',
  path: '/business/profile',
  config: {
    handler: businessProfile,
    description: 'Business Profile',
    notes: 'Get business profile from firebase cloudstore',
    tags: ['api'],
  },
};

/**
 * Represents the insert business profile routes
 */
import firebase from 'firebase';
import admin from 'firebase-admin';
import Admin from '../../../Admin';
import BusinessProfileSchema from '../../../schema/business/businessProfile';

const insertBusinessProfile = async (request, h) => {
  const administrator = new Admin(admin);
  const db = administrator.initializeDb();
  const { currentUser } = firebase.auth();

  if (currentUser) {
    const businessCollection = db.collection('business').doc(currentUser.uid);
    const {
      businessAddress,
      locationLatitude,
      locationLongitude,
      businessName,
      businessType,
    } = request.payload;

    const latitude = parseFloat(locationLatitude);
    const longitude = parseFloat(locationLongitude);

    await businessCollection.set({
      businessAddress,
      businessLocation: new admin.firestore.GeoPoint(latitude, longitude),
      businessName,
      businessType,
    });

    return h.response('Success').code(200);
  }

  return h.response('No current logged in user found!').code(400);
};

module.exports = {
  method: 'POST',
  path: '/business/profile',
  config: {
    handler: insertBusinessProfile,
    description: 'Insert business profile',
    notes: 'Insert business profile with firebase cloudstore',
    tags: ['api'],
    validate: {
      payload: BusinessProfileSchema,
    },
  },
};

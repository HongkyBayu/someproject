/**
 * Represents the get all business profile routes
 */
import admin from 'firebase-admin';

const getAllBusiness = async (request, h) => {
  const db = admin.firestore();
  const business = [];

  const businessCollection = db.collection('business');
  try {
    const allBusiness = await businessCollection.get();
    allBusiness.forEach((doc) => {
      const data = {
        id: doc.id,
        data: doc.data(),
      };
      business.push(data);
    });
  } catch (error) {
    return h.response(error).code(400);
  }
  return h.response(business).code(200);
};

module.exports = {
  method: 'GET',
  path: '/business',
  config: {
    handler: getAllBusiness,
    description: 'Business',
    notes: 'Get all business profile from firebase cloudstore',
    tags: ['api'],
  },
};

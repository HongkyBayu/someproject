/**
 * Represents the signup routes for user
 */
import firebase from 'firebase';
import Boom from 'boom';

const userLogout = async (request, h) => {
  try {
    await firebase.auth().signOut();
    return h.response('User has been logged out').code(200);
  } catch (error) {
    return Boom.badRequest(error);
  }
};

module.exports = {
  method: 'PUT',
  path: '/user/logout',
  config: {
    handler: userLogout,
    description: 'Logout user',
    notes: 'Destroy existing user session',
    tags: ['api'],
  },
};

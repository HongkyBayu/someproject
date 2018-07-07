import firebase from 'firebase';

const userProfile = async (request, h) => {
  const { currentUser } = firebase.auth();

  if (currentUser) {
    const {
      displayName, email, photoURL, emailVerified,
    } = currentUser;
    const userProfiles = {
      name: displayName,
      email,
      photoURL,
      emailVerified,
    };
    return h.response(userProfiles).code(200);
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

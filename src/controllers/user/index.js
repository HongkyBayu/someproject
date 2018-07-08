import postUserSignUp from './signup/post';
import postUserSignIn from './sigin/post';
import getUserProfile from './profile/get';
import postUserProfile from './profile/post';
import putUserLogout from './signout/put';

module.exports = [
  postUserSignUp,
  postUserSignIn,
  getUserProfile,
  postUserProfile,
  putUserLogout,
];

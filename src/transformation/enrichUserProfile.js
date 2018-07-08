/**
 * Represents the enrich function of user profile
 */

import dateMapper from '../utils/dateMapper';

/**
 * This function is to combine data from firebase cloudstore and current logged user profile
 * @param {object} cloudstoreProfile - data from firebase cloudstore
 * @param {object} userProfile - data from current logged user
 * @returns {object} enriched user profile
 */
const enrichUserProfile = (cloudstoreProfile, userProfile) => {
  const {
    address,
    dateOfBirth,
    firstName,
    lastName,
    phoneNumber,
  } = cloudstoreProfile;

  const {
    displayName,
    email,
    photoURL,
    emailVerified,
  } = userProfile;

  const dob = dateMapper.formatDate(dateOfBirth);

  return {
    fullName: displayName,
    firstName,
    lastName,
    address,
    phoneNumber,
    dateOfBirth: dob,
    email,
    emailVerified,
    photoURL,
  };
};

module.exports = enrichUserProfile;

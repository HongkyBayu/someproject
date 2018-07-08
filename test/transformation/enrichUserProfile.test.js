import { expect } from 'chai';
import enrichUserProfile from '../../src/transformation/enrichUserProfile';
import fixtures from '../fixtures/userProfile';

describe('User Profile', () => {
  let mockProfileCloudStore;
  let mockCurrentLoggedUser;

  beforeEach(() => {
    mockProfileCloudStore = fixtures.userProfileCloudstore;
    mockCurrentLoggedUser = fixtures.currentLoggedUser;
  });

  describe('#enrichUserProfile', () => {
    it('should enrich user profile', () => {
      const enrichedUserProfile = enrichUserProfile(mockProfileCloudStore, mockCurrentLoggedUser);

      const expectedUserProfile = {
        fullName: 'Rangga Bayu',
        firstName: 'Rangga',
        lastName: 'Bayu',
        address: 'Jalan Jakarta',
        phoneNumber: '0888882739',
        dateOfBirth: '30-05-1995',
        email: 'rangga@gmail.com',
        emailVerified: true,
        photoURL: 'null',
      };

      expect(enrichedUserProfile).to.deep.eq(expectedUserProfile);
    });
  });
});

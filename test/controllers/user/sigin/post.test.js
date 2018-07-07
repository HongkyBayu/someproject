import { expect } from 'chai';
import firebase from 'firebase/index';
import Sinon from 'sinon';
import Hapi from 'hapi';
import App from '../../../../src/App';

describe('User Controller', () => {
  let server;
  beforeEach(() => {
    server = new Hapi.server();
    new App(server).configure();
  });
  describe('Sign-in', () => {
    it('should response with code 201 if success', async () => {
      Sinon.stub(firebase.auth, 'signInWithEmailAndPassword').callsFake((callback) => {
        callback(null, {test: 'test'});
      });
      const request = await server.inject({
        url: '/user/signin',
        method: 'POST',
        payload: {
          email: 'rangga@gmail.com',
          password: 'string',
        },
      });
      const expectedStatusCode = 201;

      expect(request.statusCode).to.eq(expectedStatusCode);
    });
  });
});

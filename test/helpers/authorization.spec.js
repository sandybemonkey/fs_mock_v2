/* eslint-env mocha */
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import  authorizationHelper from '../../helpers/authorization';
import config from '../../config/config.json';

chai.should();
chai.use(sinonChai);

const assert = chai.assert;

describe('helpers/authorization', () => {
  it('should return a correct authorization url to call the API "/api/v1/authorize"', () => {
    // Setup
    const expectedUrl = `${config.AUTHORIZATION_URL}?response_type=code`
      + `&client_id=${config.CLIENT_SECRET}&redirect_uri=${config.REDIRECT_URL}`
      + `&scope=${config.SCOPE}&state=${config.STATE}&nonce=${config.NONCE}`;
    // Action
    const helperResponse = authorizationHelper.getAuth();
    // Assert
    assert.deepEqual(helperResponse, expectedUrl);
  });
});
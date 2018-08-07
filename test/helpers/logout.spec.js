/* eslint-env mocha */
import { assert } from 'chai';
import logoutHelper from '../../helpers/logout';
import config from '../../config/config.json';
import idHintToken from '../../helpers/idHintToken';

describe('helpers/logout', () => {
  it('should return a correct logout url to call the API "/api/v1/logout"', () => {
    // Setup
    const expectedUrl = `${config.LOGOUT_URL}?id_token_hint=${idHintToken.getHintToken()}`
      + `&state=${config.STATE}&post_logout_redirect_uri=${config.LOGOUT_REDIRECT_URL}`;
    // Action
    const helperResponse = logoutHelper.logout();
    // Assert
    assert.deepEqual(helperResponse, expectedUrl);
  });
});

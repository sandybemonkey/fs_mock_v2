/* eslint-env mocha */
import { assert } from 'chai';
import sinon from 'sinon';
import idHintTokenHelper from '../../helpers/idHintToken';


describe('helpers/idHintToken', () => {
  beforeEach(() => {
    sinon.spy(idHintTokenHelper, 'setHintToken');
    sinon.spy(idHintTokenHelper, 'getHintToken');
    sinon.spy(idHintTokenHelper, 'resetHintToken');
  });

  afterEach(() => {
    // Unwraps the spies
    idHintTokenHelper.setHintToken.restore();
    idHintTokenHelper.getHintToken.restore();
    idHintTokenHelper.resetHintToken.restore();
  });

  it('setHintToken() function should set an id_hint_token object with the response id_hint_token from the"/api/v1/token" endpoint ', () => {
    // Setup
    const getAccsessTokenResponse = {
      access_token: '6564ae28e3c388c0fc39a9ef5929727aea7c0d76a628acc76bb1a74fdb665d98',
      token_type: 'Bearer',
      expires_in: 60,
      id_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2ZjcC5pbnRlZzAxLmRldi1mcmFuY2Vjb25uZWN0LmZyIiwic3ViIjoiMWFjZGI3ZGUxODFiY2YzMTFhOGFiZWE0Yjg1Y2MzOGY4ZmJhYTE4MDA2N2EyYWFkMDc0NTMxNWIyOWEyNGUyZXYxIiwiYXVkIjoiYzQ4ZmY1YWU5NmU4NzBmNTA3NTA3NTU1ZjdiYzRkZDM2MWQyYWFjMzFkZjIxOWZlNmU5MmJiY2NhNjVmNzNmNSIsImV4cCI6MTUzMzU2NjE0MiwiaWF0IjoxNTMzNTY2MDgyLCJub25jZSI6ImN1c3RvbU5vbmUxMSIsImlkcCI6IkZDIiwiYWNyIjoiZWlkYXMyIiwiYW1yIjpbXX0.Ku27XniRVfK1ja0F75e_6GU7El1oQP3s1E61F2FmN1k',
    };

    // Action
    idHintTokenHelper.setHintToken(getAccsessTokenResponse.id_token);
    const hintToken = idHintTokenHelper.getHintToken();

    // Assert
    idHintTokenHelper.setHintToken.should.have.callCount(1);
    assert.deepEqual(hintToken, getAccsessTokenResponse.id_token);
  });

  it('getHintToken() should return an hint token', () => {
    // Setup
    const getAccsessTokenResponse = {
      access_token: '6564ae28e3c388c0fc39a9ef5929727aea7c0d76a628acc76bb1a74fdb665d98',
      token_type: 'Bearer',
      expires_in: 60,
      id_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2ZjcC5pbnRlZzAxLmRldi1mcmFuY2Vjb25uZWN0LmZyIiwic3ViIjoiMWFjZGI3ZGUxODFiY2YzMTFhOGFiZWE0Yjg1Y2MzOGY4ZmJhYTE4MDA2N2EyYWFkMDc0NTMxNWIyOWEyNGUyZXYxIiwiYXVkIjoiYzQ4ZmY1YWU5NmU4NzBmNTA3NTA3NTU1ZjdiYzRkZDM2MWQyYWFjMzFkZjIxOWZlNmU5MmJiY2NhNjVmNzNmNSIsImV4cCI6MTUzMzU2NjE0MiwiaWF0IjoxNTMzNTY2MDgyLCJub25jZSI6ImN1c3RvbU5vbmUxMSIsImlkcCI6IkZDIiwiYWNyIjoiZWlkYXMyIiwiYW1yIjpbXX0.Ku27XniRVfK1ja0F75e_6GU7El1oQP3s1E61F2FmN1k',
    };

    // Action
    idHintTokenHelper.setHintToken(getAccsessTokenResponse.id_token);
    const hintToken = idHintTokenHelper.getHintToken();

    // Assert
    idHintTokenHelper.getHintToken.should.have.callCount(1);
    assert.deepEqual(hintToken, getAccsessTokenResponse.id_token);
  });

  it('resetHintToken() function should return the id_hint', () => {
    // Setup
    const getAccsessTokenResponse = {
      access_token: '6564ae28e3c388c0fc39a9ef5929727aea7c0d76a628acc76bb1a74fdb665d98',
      token_type: 'Bearer',
      expires_in: 60,
      id_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2ZjcC5pbnRlZzAxLmRldi1mcmFuY2Vjb25uZWN0LmZyIiwic3ViIjoiMWFjZGI3ZGUxODFiY2YzMTFhOGFiZWE0Yjg1Y2MzOGY4ZmJhYTE4MDA2N2EyYWFkMDc0NTMxNWIyOWEyNGUyZXYxIiwiYXVkIjoiYzQ4ZmY1YWU5NmU4NzBmNTA3NTA3NTU1ZjdiYzRkZDM2MWQyYWFjMzFkZjIxOWZlNmU5MmJiY2NhNjVmNzNmNSIsImV4cCI6MTUzMzU2NjE0MiwiaWF0IjoxNTMzNTY2MDgyLCJub25jZSI6ImN1c3RvbU5vbmUxMSIsImlkcCI6IkZDIiwiYWNyIjoiZWlkYXMyIiwiYW1yIjpbXX0.Ku27XniRVfK1ja0F75e_6GU7El1oQP3s1E61F2FmN1k',
    };

    // Action
    idHintTokenHelper.setHintToken(getAccsessTokenResponse.id_token);
    const hintToken = idHintTokenHelper.resetHintToken();

    // Assert
    idHintTokenHelper.resetHintToken.should.have.callCount(1);
    assert.deepEqual(hintToken, null);
  });
});

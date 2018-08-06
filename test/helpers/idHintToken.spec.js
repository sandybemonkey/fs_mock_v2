/* eslint-env mocha */
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import  idHintTokenHelper from '../../helpers/idHintToken';
import userInfoHelper from "../../helpers/userInfo";
//import config from '../../config/config.json';
//import idHintToken from "../../helpers/idHintToken";
//import userInfoHelper from "../../helpers/userInfo";

chai.should();
chai.use(sinonChai);

const assert = chai.assert;

describe('helpers/idHintToken', () => {
  beforeEach(() => {
    sinon.spy(idHintTokenHelper, 'setHintToken');
    sinon.spy(idHintTokenHelper, 'getHintToken');
  });

  afterEach(() =>{
    idHintTokenHelper.setHintToken.restore(); // Unwraps the spy
    idHintTokenHelper.getHintToken.restore(); // Unwraps the spy
  });

  it('setHintToken() function should set an id_hint_token object with the response id_hint_token from the"/api/v1/token" endpoint ', () => {
    // Setup
    const getAccsessToken_response = {
      access_token: '6564ae28e3c388c0fc39a9ef5929727aea7c0d76a628acc76bb1a74fdb665d98',
      token_type: 'Bearer',
      expires_in: 60,
      id_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2ZjcC5pbnRlZzAxLmRldi1mcmFuY2Vjb25uZWN0LmZyIiwic3ViIjoiMWFjZGI3ZGUxODFiY2YzMTFhOGFiZWE0Yjg1Y2MzOGY4ZmJhYTE4MDA2N2EyYWFkMDc0NTMxNWIyOWEyNGUyZXYxIiwiYXVkIjoiYzQ4ZmY1YWU5NmU4NzBmNTA3NTA3NTU1ZjdiYzRkZDM2MWQyYWFjMzFkZjIxOWZlNmU5MmJiY2NhNjVmNzNmNSIsImV4cCI6MTUzMzU2NjE0MiwiaWF0IjoxNTMzNTY2MDgyLCJub25jZSI6ImN1c3RvbU5vbmUxMSIsImlkcCI6IkZDIiwiYWNyIjoiZWlkYXMyIiwiYW1yIjpbXX0.Ku27XniRVfK1ja0F75e_6GU7El1oQP3s1E61F2FmN1k'
    }

    // Action
    idHintTokenHelper.setHintToken(getAccsessToken_response.id_token);
    const hintToken = idHintTokenHelper.getHintToken();

    // Assert
    idHintTokenHelper.setHintToken.should.have.callCount(1);
    assert.deepEqual(hintToken, getAccsessToken_response.id_token);
  });

  it('getHintToken() function should return the id_hint', () => {
    // Setup
    const getAccsessToken_response = {
      access_token: '6564ae28e3c388c0fc39a9ef5929727aea7c0d76a628acc76bb1a74fdb665d98',
      token_type: 'Bearer',
      expires_in: 60,
      id_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2ZjcC5pbnRlZzAxLmRldi1mcmFuY2Vjb25uZWN0LmZyIiwic3ViIjoiMWFjZGI3ZGUxODFiY2YzMTFhOGFiZWE0Yjg1Y2MzOGY4ZmJhYTE4MDA2N2EyYWFkMDc0NTMxNWIyOWEyNGUyZXYxIiwiYXVkIjoiYzQ4ZmY1YWU5NmU4NzBmNTA3NTA3NTU1ZjdiYzRkZDM2MWQyYWFjMzFkZjIxOWZlNmU5MmJiY2NhNjVmNzNmNSIsImV4cCI6MTUzMzU2NjE0MiwiaWF0IjoxNTMzNTY2MDgyLCJub25jZSI6ImN1c3RvbU5vbmUxMSIsImlkcCI6IkZDIiwiYWNyIjoiZWlkYXMyIiwiYW1yIjpbXX0.Ku27XniRVfK1ja0F75e_6GU7El1oQP3s1E61F2FmN1k'
    }

    // Action
    idHintTokenHelper.setHintToken(getAccsessToken_response.id_token);
    const hintToken = idHintTokenHelper.getHintToken();

    // Assert
    idHintTokenHelper.getHintToken.should.have.callCount(1);
    assert.deepEqual(hintToken, getAccsessToken_response.id_token);
  })
})
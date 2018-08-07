/* eslint-env mocha */
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import nock from 'nock';

import  userHelper from '../../helpers/user';
import  userInfoHelper from '../../helpers/userInfo';
import config from '../../config/config.json';

chai.should();
chai.use(sinonChai);

const assert = chai.assert;

describe('helpers/user', () => {
  beforeEach(() => {
    sinon.spy(userInfoHelper, 'getUserInfo');
  });
  afterEach(() =>{
    userInfoHelper.getUserInfo.restore(); // Unwraps the spy
  });

  it('getUser() should call the "/api/v1/userinfo" endpoint and get the response.body.data should be an object', () => {
    // Setup
    const response = {
      status: '200',
      data: {
        given_name : 'Eric',
        family_name : 'Mercier',
        preferred_username: '',
        gender : 'Male',
        birthdate : '1990-12-05',
        birthplace : '91272',
        birthcountry : '99100',
      }
    }
    const token = 'custom token';
    const res = {
      sendStatus: () => {},
      send: () => {}
    };
    // Action
    userHelper.getUser(token, res);

    return nock(config.FC_URL)
      .get('/api/v1/userinfo', {
        reqheaders: {
          'authorization': 'Bearer UEYRR764535REFFDTSUJX'
        }
      })
      .reply(200, response);
    // Assert
    assert.typeOf(response.body.data, 'object');
  });

  it('getUser() should call the "/api/v1/userinfo" endpoint and get the response.body.data should not be null', () => {
    // Setup
    const response = {
      status: '200',
      data: {
        given_name : 'Eric',
        family_name : 'Mercier',
        preferred_username: '',
        gender : 'Male',
        birthdate : '1990-12-05',
        birthplace : '91272',
        birthcountry : '99100',
      }
    }
    const token = 'custom token';
    const res = {
      sendStatus: () => {},
      send: () => {}
    };
    // Action
    userHelper.getUser(token, res);
    return nock(config.FC_URL)
      .get('/api/v1/userinfo', {
        reqheaders: {
          'authorization': 'Bearer UEYRR764535REFFDTSUJX'
        }
      })
      .reply(200, response);
    // Assert
    assert.isNotNull(res.body.data);
  });

  it('getUser() should call the "/api/v1/userinfo" endpoint and get the response.body.data should match what is expected', () => {
    // Setup
    const expectedResponseData = {
      given_name : 'Eric',
      family_name : 'Mercier',
      preferred_username: '',
      gender : 'Male',
      birthdate : '1990-12-05',
      birthplace : '91272',
      birthcountry : '99100',
    };
    const response = {
      status: '200',
      data: {
        given_name : 'Eric',
        family_name : 'Mercier',
        preferred_username: '',
        gender : 'Male',
        birthdate : '1990-12-05',
        birthplace : '91272',
        birthcountry : '99100',
      }
    }
    const token = 'custom token';
    const res = {
      sendStatus: () => {},
      send: () => {}
    };
    // Action
    userHelper.getUser(token, res);
    return nock(config.FC_URL)
      .get('/api/v1/userinfo', {
        reqheaders: {
          'authorization': 'Bearer UEYRR764535REFFDTSUJX'
        })
      .reply(200, response);
    // Assert
    assert.typeOf(res.body.data, 'object');
    assert.isNotNull(res.body.data);
    assert.deepEqual(response.body.data, expectedResponseData);
  });

  it('should call the helpers/userInfo getUserInfo() if data is exit in the response from "/api/v1/userinfo" endpoint ', () => {
    // Setup
    const endPointResponse = {
      given_name : 'Eric',
      family_name : 'Mercier',
      preferred_username: '',
      gender : 'Male',
      birthdate : '1990-12-05',
      birthplace : '91272',
      birthcountry : '99100',
    };
    // Action
    userInfoHelper.getUserInfo(endPointResponse);
    const userInfo = userInfoHelper.sendUserInfo();
    // Assert
    userInfoHelper.getUserInfo.should.have.callCount(1);
  });
});
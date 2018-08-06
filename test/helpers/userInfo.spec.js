/* eslint-env mocha */
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import  userInfoHelper from '../../helpers/userInfo';
chai.should();
chai.use(sinonChai);
const assert = chai.assert;

describe('helpers/userInfo', () => {
  beforeEach(() => {
    sinon.spy(userInfoHelper, 'getUserInfo');
  });

  afterEach(() =>{
    userInfoHelper.getUserInfo.restore(); // Unwraps the spy
  });

  it('getUserInfo() function should set an userInfo object with the response from France Connect "/api/v1/userinfo" endpoint', () => {
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
    const expectedResponse = {
      name : 'Eric',
      lastName : 'Mercier',
      username: '',
      gender : 'Male',
      birthdate : '1990-12-05',
      birthplace : '91272',
      country : '99100',
    };
    // Action
    userInfoHelper.getUserInfo(endPointResponse);
    const userInfo = userInfoHelper.sendUserInfo();

    // Assert
    userInfoHelper.getUserInfo.should.have.callCount(1);
    assert.deepEqual(userInfo, expectedResponse);
  });

  it(' sendUserInfo() function should return user informations', () => {
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
    const expectedResponse = {
      name : 'Eric',
      lastName : 'Mercier',
      username: '',
      gender : 'Male',
      birthdate : '1990-12-05',
      birthplace : '91272',
      country : '99100',
    };
    sinon.spy(userInfoHelper, 'sendUserInfo');

    // Action
    userInfoHelper.getUserInfo(endPointResponse);
    const userInfo = userInfoHelper.sendUserInfo();

    // Assert
    userInfoHelper.getUserInfo.should.have.callCount(1);
    assert.deepEqual(userInfo, expectedResponse);
  });
});

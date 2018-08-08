/* eslint-env mocha */
import chai from 'chai';
import chaiHttp from 'chai-http';
import config from '../../config/config.json';

chai.use(chaiHttp);
const { expect } = chai;
const { done } = chai;

describe('helpers/user', () => {
  it('getUser() should call the "/api/v1/userinfo" endpoint to send a status 200', () => {
    chai.request(config.FC_URL)
      .get(config.USERINFO_URL)
      .set('Authorization', 'Bearer UEYRR764535REFFDTSUJX')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('getUser() should call the "/api/v1/userinfo" endpoint and get the response.body.data should be an object', () => {
    chai.request(config.FC_URL)
      .get(config.USERINFO_URL)
      .set('Authorization', 'Bearer UEYRR764535REFFDTSUJX')
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('getUser() should call the "/api/v1/userinfo" endpoint and get the response.body.data should not be null', () => {
    chai.request(config.FC_URL)
      .get(config.USERINFO_URL)
      .set('Authorization', 'Bearer UEYRR764535REFFDTSUJX')
      .end((err, res) => {
        expect(res.body).to.not.equal(null);
        done();
      });
  });
});

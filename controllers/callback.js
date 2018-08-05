/**
 * Service Provider gets the authorization code from FranceConnect.
 * You can now Get an access token and an id token
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
 */
import axios from 'axios';
import getAccessTokenHelper from '../helpers/accessToken';

/**
 *  Get The  access token and an id token if authorization code send by France Connect is there.
 * @param req
 * @param res
 */
exports.getData = (req, res) => {
  // check if the mandatory Authorization code is there.
  if (!req.query.code) {
    res.status('401').send("A code is need ")
  }
  getAccessTokenHelper.getAccessToken(res, req.query.code);
};

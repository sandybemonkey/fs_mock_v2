import axios from "axios";
import querystring from "querystring";
import getUserHelper from "./getUser";
import config from '../config/config.json';

/**
 * Set this to true if you want to send token to data provider example
 * @type {boolean}
 */
const sendTokenToFD = false;

/**
 * Get the Access token from France Connect
 * @param res
 * @param queryCode
 * @returns {Promise<void>}
 */
exports.getAccessToken = async (res, queryCode) => {
  const tokenUrl = config.TOKEN_URL;
  const redirectUrl = config.REDIRECT_URL;
  const clientId = config.CLIENT_SECRET;
  const secretKey = config.SECRET_KEY;
  const userInfoUrl = config.USERINFO_URL;

  const url = tokenUrl;

  const body = {
    grant_type: 'authorization_code',
    redirect_uri: redirectUrl,
    client_id: clientId,
    client_secret: secretKey,
    code: queryCode,
  };

  const headerConfig = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };


  await axios.post(url, querystring.stringify(body), headerConfig)
    .then(response => response.data)
    .then((tokenData) => {
      if (sendTokenToFD) {
        /**
         * Request to the Data Provider Example
         * @see {@link https://github.com/sandybemonkey/fd_mock }
         */
        axios({
          method: 'GET',
          headers: {Authorization: `Bearer ${tokenData.access_token}`},
          url: config.DATA_PROVIDER_EXAMPLE_URL,
        }).catch(err => {
          res.send(err.message);
        });
      }

      /**
       * Get the user information
       * @param {string} token - access token send by France Connect.
       * @param {object} response: use to send the user to the profil page.
       */
      getUserHelper.getUser(tokenData.access_token, res);
    })
    .catch(err => {
      res.send(err.message);
    })
}
/**
 * Helper to get an access token from France Connect.
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
 */
import axios from 'axios';
import querystring from 'querystring';
import getUserHelper from './user';
import config from '../config/config.json';

const sendTokenToFD = false;
const fdMockUrl = config.FD_MOCK_URL;

const tokenUrl = config.TOKEN_URL;
const redirectUrl = config.REDIRECT_URL;
const clientId = config.CLIENT_SECRET;
const secretKey = config.SECRET_KEY;

/**
 * Init FranceConnect authentication login process.
 * Make every http call to the different API endpoints.
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
 */
exports.getAccessToken = async (res, req) => {
  // Set request params.
  const url = tokenUrl;
  const body = {
    grant_type: 'authorization_code',
    redirect_uri: redirectUrl,
    client_id: clientId,
    client_secret: secretKey,
    code: req.query.code,
  };
  const headerConfig = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  /**
   * Request access token.
   */
  await axios.post(url, querystring.stringify(body), headerConfig)
    .then(response => response.data)
    .then((tokenData) => {
      req.accessToken = tokenData.access_token;
      req.session.id_token = tokenData.id_token;
      /**
       * Use to send the access token to an data provider.
       * @return an object of data from the provider.
       * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
       * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-donnees }
       * @see @link{ https://github.com/france-connect/data-providers-examples }
       */
      if (sendTokenToFD) {
        axios({
          method: 'GET',
          /**
           * only valid used with dat-providers-example code from France Connect repo.
           * If use using your code change the url's value.
           * @see @link{ https://github.com/france-connect/data-providers-examples }
           */
          url: fdMockUrl,
          headers: { Authorization: `Bearer ${tokenData.access_token}` },
        })
          .then((fdResponse) => {
            console.info('[INFO] request to Data Provider done. Data Provider response :' );
            console.info(`[INFO] ${fdResponse}`);
          })
          .catch(err => res.send(err.message));
      }
      /**
       * Make a call to the France Connect API endpoint to get user data.
       */
      getUserHelper.getUser(req, res);
    })
    .catch(err => res.send(err.message));
};


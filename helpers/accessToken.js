/**
 * Helper to get an access token from France Connect.
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
 */
import axios from "axios";
import querystring from "querystring";
import getUserHelper from "./user";
import idHintToken from "./idHintToken";
import config from '../config/config.json';

const sendTokenToFD = false;

/**
 * Init FranceConnect authentication login process.
 * Make every http call to the different API endpoints.
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
 */
exports.getAccessToken = async (res, queryCode) => {
  const tokenUrl = config.TOKEN_URL;
  const redirectUrl = config.REDIRECT_URL;
  const clientId = config.CLIENT_SECRET;
  const secretKey = config.SECRET_KEY;
  const userInfoUrl = config.USERINFO_URL;

  // Set request params.
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

  /**
   * Resquest access token.
   */
  await axios.post(url, querystring.stringify(body), headerConfig)
    .then(response => response.data)
    .then((tokenData) => {
      console.log(tokenData)
      idHintToken.setHintToken(tokenData.id_token);
      /**
       * Use to send the access token to an data provider.
       * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
       * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-donnees }
       * @see @link{ https://github.com/france-connect/data-providers-examples }
       */
      if (sendTokenToFD) {
        axios({
          method: 'GET',
          headers: {Authorization: `Bearer ${tokenData.access_token}`},
          /**
           * only valid used with dat-providers-example code from France Connect repo.
           * If use using your code change the url's value.
           * @see @link{ https://github.com/france-connect/data-providers-examples }
           */
          url: 'http://localhost:4000/revenu-fiscal-de-reference',
        }).catch(err => {
          res.send(err.message);
        });
      }
      /**
       * Make a call to the France Connect API endpoint to get user Informations.
       */
      getUserHelper.getUser(tokenData.access_token, res);
    })
    .catch(err => {
      res.send(err.message);
    })
}
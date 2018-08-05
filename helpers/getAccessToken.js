import axios from "axios";
import querystring from "querystring";
import getUserHelper from "./getUser";
import config from '../config/config.json';

const sendTokenToFD = false;

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
        axios({
          method: 'GET',
          headers: {Authorization: `Bearer ${tokenData.access_token}`},
          url: 'http://localhost:4000/revenu-fiscal-de-reference',
        }).catch(err => {
          res.send(err.message);
        });
      }

      getUserHelper.getUser(tokenData.access_token, res);
    })
    .catch(err => {
      res.send(err.message);
    })
}
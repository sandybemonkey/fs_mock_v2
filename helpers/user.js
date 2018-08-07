/**
 * Call to the userInfo API endpoint.
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
 */

import axios from 'axios';
import userInfosHelper from './userInfo';
import config from '../config/config.json';

exports.getUser = async (token, res) => {
  if (!token) res.sendStatus(401);
  // Set request header
  const headerConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  await axios.get(config.USERINFO_URL, headerConfig)
    .then((response) => {
      // Helper to set userInfo value available to the profile page.
      userInfosHelper.getUserInfo(response.data);
      res.redirect('profile');
    })
    .catch(err => res.send(err.message));
};

import axios from "axios";
import userInfosHelper from "./getUserInfo";
import config from '../config/config.json';

/**
 * Getting the user informations
 * @param token
 * @param res
 * @returns {Promise<void>}
 */
exports.getUser = async (token, res) => {
  const headerConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  await axios.get(config.USERINFO_URL, headerConfig)
    .then(response => {
      /**
       * formating the user informations
       * @param response.data: data send by France Connect
       */
      userInfosHelper.getUserInfo(response.data);
      res.redirect('profile');
    })
    .catch(err => {
      res.send(err.message);
    })
}
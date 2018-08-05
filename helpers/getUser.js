import axios from "axios";
import userInfosHelper from "./getUserInfo";
import config from '../config/config.json';

exports.getUser = async (token, res) => {
  //request header
  const headerConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  await axios.get(config.USERINFO_URL, headerConfig)
    .then(response => {
      userInfosHelper.getUserInfo(response.data);
      res.redirect('profile');
    })
    .catch(err => {
      res.send(err.message);
    })
}
import axios from 'axios';
import querystring from 'querystring';
import getAccessTokenHelper from '../helpers/getAccessToken';

exports.getData = (req, res) => {
  if (!req.query.code) {
    res.send("Code is required to get the Access token")
  }
  getAccessTokenHelper.getAccessToken(res, req.query.code);
};

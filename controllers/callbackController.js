import axios from 'axios';
import querystring from 'querystring';
import getAccessTokenHelper from '../helpers/getAccessToken';

exports.getData = (req, res) => {
  //if code param exist
  if (req.query.code) {
    getAccessTokenHelper.getAccessToken(res, req.query.code);
  }
};

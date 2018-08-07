/**
 * Entry point of the service provider(FS) demo app.
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
 */
import express from 'express';
import logger from 'morgan';

import userInfosHelper from './helpers/userInfo';
import idHintHelper from './helpers/idHintToken';
import logoutHelper from './helpers/logout';
import authorizationHelper from './helpers/authorization';
import getAccessTokenHelper from './helpers/accessToken';

const app = express();
const port = process.env.PORT || '3000';

if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}

app.set('view engine', 'ejs');
app.set('port', port);

app.use(express.static('public'));


/**
 * Routes
 */
app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/login', (req, res) => {
  res.redirect(authorizationHelper.getAuth());
});

app.get('/callback', (req, res) => {
  // check if the mandatory Authorization code is there.
  if (!req.query.code) {
    res.sendStatus(400);
  }
  getAccessTokenHelper.getAccessToken(res, req.query.code);
});

app.get('/profile', (req, res) => {
  /**
   * Getting the user informations by calling helpers/userInfo.
   * @type {{}}
   */
  const user = userInfosHelper.sendUserInfo();
  res.render('pages/profile', { user });
});

app.get('/logout', (req, res) => {
  res.redirect(logoutHelper.logout());
});

app.get('/end', (req, res) => {
  // resetting the id token hint.
  idHintHelper.resetHintToken();
  res.render('pages/end');
});

const server = app.listen(port);

export default server;

/**
 * Entry point of the service provider(FS) demo app.
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
 */
import express from 'express';
import logger from 'morgan';
import session from 'express-session';

import utilsHelper from './helpers/utils';
import getAccessTokenHelper from './helpers/accessToken';

const app = express();
const port = process.env.PORT || '3000';

/**
 * session config
 * @type {{secret: string, cookie: {}, saveUninitialized: boolean}}
 */
const sess = {
  secret: 'demo secret', // put your own secret
  cookie: {},
  saveUninitialized: true,
};

/**
 * session config for production
 */
if (app.get('env') === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}

app.set('view engine', 'ejs');
app.set('port', port);

app.use(express.static('public'));
app.use(session(sess));

/**
 * Routes
 */
app.get('/', (req, res) => {
  res.render('pages/index');
});

/**
 * Init authorization and login process
 */
app.get('/login', (req, res) => {
  res.redirect(utilsHelper.getAuthorizationUrl());
});

/**
 * Getting the access token required to get the user data
 */
app.get('/callback', (req, res) => {
  // check if the mandatory Authorization code is there.
  if (!req.query.code) {
    res.sendStatus(400);
  }
  getAccessTokenHelper.getAccessToken(res, req);
});

app.get('/profile', (req, res) => {
  const user = req.session.userInfo;
  res.render('pages/profile', { user });
});

/**
 * Init logout process
 */
app.get('/logout', (req, res) => {
  res.redirect(utilsHelper.getLogoutUrl(req));
});

app.get('/end', (req, res) => {
  // resetting the id token hint.
  req.session.id_token = null;
  req.session.userInfo = null;
  res.render('pages/end');
});

const server = app.listen(port);

export default server;

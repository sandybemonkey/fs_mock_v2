/**
 * Entry point of the service provider(FS) demo app.
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
 */
import express from 'express';
import logger from 'morgan';
import session from 'express-session';

import { getAuthorizationUrl, getLogoutUrl } from './helpers/utils';
import getAccessToken from './controllers/accessToken';
import getFDData from './controllers/callFD';

const app = express();

/**
 * session config
 * @type {{secret: string, cookie: {}, saveUninitialized: boolean, resave: boolean}}
 */
const sessionConfig = {
  secret: 'demo secret', // put your own secret
  cookie: {},
  saveUninitialized: true,
  resave: true,
};

// session config for production
if (app.get('env') === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  sessionConfig.cookie.secure = true; // serve secure cookies
}

if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(session(sessionConfig));

// Routes (@see @link{ see https://expressjs.com/en/guide/routing.html }
app.get('/', (req, res) => {
  const isAuth = false;
  res.render('pages/index', { isAuth });
});
app.get('/login', (req, res) => {
  res.redirect(getAuthorizationUrl());
});
app.get('/callback', (req, res) => {
  // check if the mandatory Authorization code is there.
  if (!req.query.code) {
    res.sendStatus(400);
  }
  getAccessToken(res, req);
});
app.get('/profile', (req, res) => {
  const isAuth = true;
  const user = req.session.userInfo;
  const isFdData = false;
  res.render('pages/profile', { user, isAuth, isFdData });
});
app.get('/callFd', (req, res) => {
  getFDData(req, res);
});
app.get('/logout', (req, res) => {
  res.redirect(getLogoutUrl(req));
});
app.get('/logged-out', (req, res) => {
  const isAuth = false;
  // resetting the id token hint.
  req.session.id_token = null;
  req.session.userInfo = null;
  res.render('pages/logged-out', { isAuth });
});

// Starting server
const port = process.env.PORT || '3000';
const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`\x1b[32mServer listening on http://localhost:${port}\x1b[0m`);
});

export default server;

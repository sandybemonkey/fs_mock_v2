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
  sess.cookie.secure = true; // serve secure cookies
}
if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(session(sessionConfig));

// Routes (@see @link{ see https://expressjs.com/en/guide/routing.html }
app.get('/', (req, res) => {
  res.render('pages/index');
});
app.get('/login', (req, res) => {
  res.redirect(utilsHelper.getAuthorizationUrl());
});
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
app.get('/logout', (req, res) => {
  res.redirect(utilsHelper.getLogoutUrl(req));
});
app.get('/end', (req, res) => {
  // resetting the id token hint.
  req.session.id_token = null;
  req.session.userInfo = null;
  res.render('pages/end');
});

// Starting server
const port = process.env.PORT || '3000';
const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`\x1b[32mServer listening on http://localhost:${port}\x1b[0m`);
});

export default server;

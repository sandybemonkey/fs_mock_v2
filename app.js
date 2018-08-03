'use strict';
import express from 'express';
import logger from 'morgan';
import session from 'express-session';

import config from './config/config.json';
import defaultRoute from './routes/index';
import logingRoute from './routes/login';
import callbackRoute from './routes/callback';
import profileRoute from './routes/profile';


const app = express();
const port = process.env.PORT || '3000'

if (process.env.NODE_ENV !== 'test') {
    app.use(logger('dev'));
}

app.set('view engine', 'ejs');
app.set('port', port);


app.use(express.static('public'));
app.use(session({
    secret: config.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
}));


app.use('/', defaultRoute);
app.use('/login', logingRoute);
app.use('/callback', callbackRoute);
app.use('/profile', profileRoute);

const server = app.listen(port);

export default server;

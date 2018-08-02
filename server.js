'use strict';

const express = require('express');
const app = express();
const session = require('express-session');
const config = require('./config/config.json');
const defaultRoute = require('./routes/index');
const logingRoute = require('./routes/login');
const callbackRoute = require('./routes/callback');
const profileRoute = require('./routes/profile');

/**
 * view engine
 */
app.set('view engine', 'ejs');

/**
 * Static files
 */
app.use(express.static('public'));

/**
 * session
 */
app.use(session({
    secret: config.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
}));

/**
 * Routes
 */
app.use('/', defaultRoute);
app.use('/login', logingRoute);
app.use('/callback', callbackRoute);
app.use('/profile', profileRoute);

//starting server
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

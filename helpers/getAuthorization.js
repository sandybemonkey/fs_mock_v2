'use strict';

const config = require('./../config/config.json');
exports.getAuth = () => `${config.AUTHORIZATION_URL}?response_type=code`
    + `&client_id=${config.CLIENT_SECRET}&redirect_uri=${config.REDIRECT_URL}`
    + `&scope=openid profile birth&state=customState11&nonce=customNone11`;
'use strict';

const express = require('express');
const router = express.Router();
const authorizationHelper = require('./../helpers/getAuthorization');

router.get('/', function(req, res) {
    res.redirect(authorizationHelper.getAuth());
});

module.exports = router;
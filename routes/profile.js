'use strict';

const express = require('express');
const router = express.Router();

// index page with fc button
router.get('/', (req, res) => {
    let user = req.session.userProfil;
    console.log('session', req.session.userProfil)
    res.render('pages/profile', {
        user: user
    });
});

module.exports = router;
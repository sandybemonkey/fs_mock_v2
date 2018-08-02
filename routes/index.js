'use strict';

const express = require('express');
const router = express.Router();

// index page with fc button
router.get('/', (req, res) => {
    res.render('pages/index');
});

module.exports = router;
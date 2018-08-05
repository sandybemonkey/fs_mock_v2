/**
 * Route that init the logout process.
 * @returns {string}
 */
import express from 'express';
import logoutController from '../controllers/logout';

const router = express.Router();

router.get('/', logoutController.logout);

module.exports = router;
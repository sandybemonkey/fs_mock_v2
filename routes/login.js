import express from 'express';
import loginController from '../controllers/loginController';

const router = express.Router();

router.get('/', loginController.fcAuthorization);

module.exports = router;

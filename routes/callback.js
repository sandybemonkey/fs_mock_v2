import express from 'express';
import callbackController from '../controllers/callbackController';

const router = express.Router();

router.get('/', callbackController.getData);

module.exports = router;

/**
 * Main route.
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
 */
import express from 'express';
import indexController from '../controllers/index';

const router = express.Router();

router.get('/', indexController.home);

module.exports = router;

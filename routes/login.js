/**
 * Route to call to init the authorization process.
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
 */
import express from 'express';
import loginController from '../controllers/login';

const router = express.Router();

router.get('/', loginController.fcAuthorization);

module.exports = router;

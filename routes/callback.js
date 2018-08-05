/**
 * Route to get the user informations.
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
 */
import express from 'express';
import callbackController from '../controllers/callback';

const router = express.Router();

router.get('/', callbackController.getData);

module.exports = router;

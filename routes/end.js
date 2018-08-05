/**
 * Calling the end page promting the user to close his browser for complete logout.
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
 */
import express from 'express';
import endController from '../controllers/end';

const router = express.Router();

router.get('/', endController.end);

module.exports = router;
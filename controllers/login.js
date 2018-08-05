/**
 * User gets to the Service Provider website
 * He is invited to log with FranceConnect Button.
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
 */
import authorizationHelper from '../helpers/authorization';

/**
 * Init the authorisation process by calling helpers/authorization.
 * @param req
 * @param res
 */
exports.fcAuthorization = (req, res) => {
  res.redirect(authorizationHelper.getAuth());
};

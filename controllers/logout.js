/**
 * Init the lougout process by calling logoutHelper.logout() of helpers/logout.
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
 */
import logoutHelper from '../helpers/logout';

/**
 * Init logout process by calling helpers/logout.
 * @param req
 * @param res
 */
exports.logout = (req, res) => {
  res.redirect(logoutHelper.logout());
};
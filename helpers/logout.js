/**
 * Init the lougout process by calling logoutHelper.logout() of helpers/logout.
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
 */
import config from '../config/config.json';
import idHintToken from '../helpers/idHintToken';

/**
 * Format the url 's that is used in a redirect call to France Connect logout API endpoint
 * @returns {string}
 */
exports.logout = () => `${config.FC_URL}/api/v1/logout?id_token_hint=${idHintToken.getHintToken()}`
  + `&state=${config.STATE}&post_logout_redirect_uri=${config.LOGOUT_REDIRECT_URL}`;
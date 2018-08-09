/**
 * Format the url use in the redirection call
 * to the France Connect Authorization and logout API endpoint.
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
 */
import config from '../config/config.json';

export const getAuthorizationUrl = () => `${config.AUTHORIZATION_URL}?response_type=code`
    + `&client_id=${config.CLIENT_SECRET}&redirect_uri=${config.REDIRECT_URL}`
    + `&scope=${config.SCOPE}&state=${config.STATE}&nonce=${config.NONCE}`;


/**
 * Format the url 's that is used in a redirect call to France Connect logout API endpoint
 * @returns {string}
 */
export const getLogoutUrl = req => `${config.LOGOUT_URL}?id_token_hint=${req.session.id_token}`
  + `&state=${config.STATE}&post_logout_redirect_uri=${config.LOGOUT_REDIRECT_URL}`;

/**
 * Format the url use in the redirection call to the France Connect Authorization API endpoint.
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
 */
const config = require('./../config/config.json');

exports.getAuth = () => `${config.AUTHORIZATION_URL}?response_type=code`
  + `&client_id=${config.CLIENT_SECRET}&redirect_uri=${config.REDIRECT_URL}`
  + `&scope=${config.SCOPE}&state=${config.STATE}&nonce=${config.NONCE}`;

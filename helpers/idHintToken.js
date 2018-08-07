/**
 * Make idHintToken value available.
 * idHintToken is needed in the logout process.
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
 */
let idHintToken = null;

/**
 * Set the value of hintToken
 * @param hintToken
 */
exports.setHintToken = (hintToken) => {
  if (hintToken) {
    idHintToken = hintToken;
  }
};
/**
 * Get idHintToken value
 * @returns idHintToken
 */
exports.getHintToken = () => idHintToken;
/**
 * Reset idHintToken after logout
 * @returns {null}
 */
exports.resetHintToken = () => {
  idHintToken = null;
  return idHintToken;
};

/**
 * Controller responsible for the end page behavior
 * promting the user to close his browser for complete logout.
 * and resetting the id token hint.
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
 */
import idHintHelper from '../helpers/idHintToken';

exports.end = (req, res) => {
  // resetting the id token hint.
  idHintHelper.resetHintToken();
  res.render('pages/end');
};
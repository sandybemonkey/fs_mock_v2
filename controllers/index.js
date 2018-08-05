/**
 * User gets to the Service Provider website
 * He is invited to log with FranceConnect Button.
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
 */
exports.home = (req, res) => {
  res.render('pages/index');
};

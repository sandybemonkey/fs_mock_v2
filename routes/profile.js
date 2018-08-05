/**
 * Route to where user is authenticate and his informations are available .
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
 */
import express from 'express';
import userInfosHelper from '../helpers/userInfo';

const router = express.Router();

router.get('/', (req, res) => {
  /**
   * Getting the user informations by calling helpers/userInfo.
   * @type {{}}
   */
  const user = userInfosHelper.sendUserInfo();
  res.render('pages/profile', { user });
});

module.exports = router;

import express from 'express';
import userInfosHelper from '../helpers/getUserInfo';

const router = express.Router();

router.get('/', (req, res) => {
  const user = userInfosHelper.sendUserInfo();
  const title = "Ville de Chilly-Mazarin";
  res.render('pages/profile', { user, title });
});

module.exports = router;

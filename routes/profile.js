import express from 'express';
import userInfosHelper from '../helpers/getUserInfo';

const router = express.Router();

router.get('/', (req, res) => {
  const user = userInfosHelper.sendUserInfo();
  res.render('pages/profile', { user });
});

module.exports = router;

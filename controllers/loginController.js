import authorizationHelper from '../helpers/getAuthorization';

exports.fcAuthorization = (req, res) => {
  res.redirect(authorizationHelper.getAuth());
};

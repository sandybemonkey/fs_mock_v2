/**
 * Making the user info data available.
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service# }
 */
const userProfil = {};

/**
 * Get and set the userInfo values.
 * @param userInfo
 */
exports.getUserInfo = (userInfo) => {
  if (!userInfo) {
    console
      .send('400')
      .error('No user information found, can set userInfo.')
  }
  userProfil.name = userInfo.given_name;
  userProfil.lastName = userInfo.family_name;
  userProfil.username = userInfo.preferred_username;
  userProfil.gender = userInfo.gender;
  userProfil.birthdate = userInfo.birthdate;
  userProfil.birthplace = userInfo.birthplace;
  userProfil.country = userInfo.birthcountry;
};

/**
 * Send back the userInfo value.
 */
exports.sendUserInfo = () => userProfil;

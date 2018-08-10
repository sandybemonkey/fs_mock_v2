/**
 * Use to send the access token to an data provider.
 * @return Response with the queried data from the provider.
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-donnees }
 * @see @link{ https://github.com/france-connect/data-providers-examples }
 */
import axios from "axios/index";
import config from '../config/config.json';

const fdMockUrl = config.FD_MOCK_URL;
// this value is only for a demo purpose you should use the Access token send by FC
const fakeAccessToken = '9af033eb295d0fe113988d29a26527f920114973b3a1ca7bdb44768fd0c73937'

export const getFDData=  (req, res) => {
  axios({
    method: 'GET',
    /**
     * only valid used with dat-providers-example code from France Connect repo.
     * If use using your code change the url's value.
     */
    url: fdMockUrl,
    headers: { Authorization: `Bearer ${fakeAccessToken}` },
  })
    .then((fdResponse) => {
      const isFdData = true;
      const isAuth = true;
      const user = req.session.userInfo;
      const dgfipData = [];

      for(var property in fdResponse.data) {
        dgfipData[property] = fdResponse.data[property];
      }
      res.render('pages/profile', { user, isAuth, isFdData, dgfipData });
    })
    .catch(err => res.send(err.message));
}
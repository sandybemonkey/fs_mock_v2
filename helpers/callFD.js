/**
 * Use to send the access token to an data provider.
 * @return Response with the queried data from the provider.
 * @see @link{ https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-donnees }
 * @see @link{ https://github.com/france-connect/data-providers-examples }
 */
import axios from "axios/index";
import config from '../config/config.json';

const fdMockUrl = config.FD_MOCK_URL;

export const getFDData=  (tokenData) => {
  axios({
    method: 'GET',
    /**
     * only valid used with dat-providers-example code from France Connect repo.
     * If use using your code change the url's value.
     */
    url: fdMockUrl,
    headers: { Authorization: `Bearer ${tokenData.access_token}` },
  })
    .then((fdResponse) => {
      console.info('[INFO] request to Data Provider done. Data Provider response :' );
      console.info(`[INFO] ${fdResponse}`);
    })
    .catch(err => res.send(err.message));
}
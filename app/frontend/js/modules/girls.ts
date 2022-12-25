import { axios } from '../lib/axios';
import { ResponseInterface } from '../lib/interface/response';
import { AxiosResponse } from 'axios';
import { GirlModel } from '../lib/interface/model';
import { buildGirlApiUrl } from '../lib/utils/url_builder';

interface ResponseGirlInterface extends ResponseInterface {
  payload: {
    girl: GirlModel;
  };
}

export const girlDetail = async (id: string): Promise<AxiosResponse<ResponseGirlInterface>> => {
  return axios().get(buildGirlApiUrl(id));
};

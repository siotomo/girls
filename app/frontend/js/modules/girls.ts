import { axios } from '../lib/axios';
import { ResponseInterface } from '../lib/interface/response';
import { AxiosResponse } from 'axios';
import { GirlModel } from '../lib/interface/model';
import { buildGirlUrl } from '../lib/utils/url_builder';

interface GirlInterface extends ResponseInterface {
  payload: {
    girl: GirlModel;
  };
}

export interface GirlsInterface extends ResponseInterface {
  data: {
    girls: GirlModel[];
  };
}

export const fetchOneGirl = async (id: string): Promise<AxiosResponse<GirlInterface>> => {
  return axios().get(buildGirlUrl(id));
};

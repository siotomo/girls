import { axios } from '../../lib/axios';
import { ResponseInterface } from '../../lib/interface/response';
import { AxiosResponse } from 'axios';
import { GirlModel } from '../../lib/interface/model';
import { buildGirlUrl } from '../../lib/utils/url_builder';

export interface GirlsInterface extends ResponseInterface {
  data: {
    girls: GirlModel[]
  }
}

export const fetchGirl = async (id: string): Promise<AxiosResponse<GirlsInterface>> => {
  return axios().get(buildGirlUrl(id));
};

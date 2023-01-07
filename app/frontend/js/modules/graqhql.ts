import { axios } from '../lib/axios';
import { GirlModel } from '../lib/interface/model';
import { AxiosResponse } from 'axios';
import { query } from 'gql-query-builder';
import { ResponseInterface } from '../lib/interface/response';
import { buildGraphqlApiUrl } from '../lib/utils/url_builder';

type queryObj = {
  operation: string;
  fields: string[];
};

export interface ReponseGirlsInterface extends ResponseInterface {
  data: {
    girls: GirlModel[];
  };
}

export const graphqlQuery = async (args: queryObj): Promise<AxiosResponse<ReponseGirlsInterface>> => {
  return axios().post(buildGraphqlApiUrl(), query(args));
};

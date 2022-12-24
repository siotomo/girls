import { query } from 'gql-query-builder';
import { axios } from '../axios';
import { ResponseInterface } from '../interface/response';
import { AxiosResponse } from 'axios';
import { GirlModel } from '../interface/model';
import { buildGraphqlUrl } from './url_builder';

type queryObj = {
  operation: string;
  fields: string[];
};

export interface GirlsInterface extends ResponseInterface {
  data: {
    girls: GirlModel[]
  }
}

export const graphqlQuery = async (args: queryObj): Promise<AxiosResponse<GirlsInterface>> => {
  return axios().post(buildGraphqlUrl(), query(args));
};

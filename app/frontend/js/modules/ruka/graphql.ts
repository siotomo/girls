import { query } from 'gql-query-builder';
import { axios } from '../../lib/axios';
import { ResponseInterface } from '../../lib/interface/response';
import { AxiosResponse } from 'axios';
import { GirlModel } from '../../lib/interface/model';
import { buildGraphqlUrl } from '../../lib/utils/url_builder';

type queryObj = {
  operation: string;
  fields: string[];
};

export interface GirlsInterface extends ResponseInterface {
  data: {
    girls: GirlModel[];
  };
}

export const graphqlQuery = async (args: queryObj): Promise<AxiosResponse<GirlsInterface>> => {
  return axios().post(buildGraphqlUrl(), query(args));
};

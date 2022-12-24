import { axios } from "../lib/axios";
import { GirlModel } from '../lib/interface/model';
import { AxiosResponse } from "axios";
import { query } from "gql-query-builder";
import { ResponseInterface } from "../lib/interface/response";
import { buildGraphqlUrl } from "../lib/utils/url_builder";

type queryObj = {
  operation: string;
  fields: string[];
};

export interface GirlsInterface extends ResponseInterface {
  data: {
    girls: GirlModel[];
  };
}

export const graphqlQuery = async (
  args: queryObj
): Promise<AxiosResponse<GirlsInterface>> => {
  return axios().post(buildGraphqlUrl(), query(args));
};

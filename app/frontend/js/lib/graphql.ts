import { query } from 'gql-query-builder';
import { axios } from './axios';
import { AxiosResponse } from 'axios';

type queryObj = {
  operation: string;
  fields: string[];
}

export const graphqlQuery = async (args: queryObj): Promise<{girls: string[]}> => {
  const res: AxiosResponse<{data: { girls: string[]}}> = await axios().post('/graphql', query(args));

  return res.data.data;
};

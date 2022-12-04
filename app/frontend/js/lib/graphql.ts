import { query } from 'gql-query-builder';
import { axios } from './axios';
import { AxiosResponse } from 'axios';

type queryObj = {
  operation: string;
  fields: string[];
};

type Girl = {
  id: number;
  name: string;
  age: number;
  score: number;
};

export const graphqlQuery = async (args: queryObj): Promise<{ girls: Girl[] }> => {
  const res: AxiosResponse<{ data: { girls: Girl[] } }> = await axios().post(
    '/graphql',
    query(args)
  );

  return res.data.data;
};

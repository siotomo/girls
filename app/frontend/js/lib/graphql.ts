import  { query } from 'gql-query-builder'
import { axios } from './axios'

type TypeQueryOption = Parameters<typeof query>

export const graphqlQuery = async (args: any) => {
  const res = await axios().post('/graphql', query(args))

  return res.data.data;
}

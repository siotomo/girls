import * as React from 'react';
import { useParams } from 'react-router-dom';
import { graphqlQuery } from '../../lib/graphql';
import * as gql from 'gql-query-builder';

type Girl = {
  id: number;
  name: string;
  age: number;
  score: number;
};

const Detail: React.FC = () => {
  const [girl, setGirl] = React.useState<Girl>();
  const { id } = useParams();

  const fetchGirl = React.useCallback(async () => {
    console.log('fetchGirl start');
    console.log(id);
    const queryObj = {
      operation: 'girl',
      variables: { id: id },
      fields: ['id', 'name'],
    };
    const data = await graphqlQuery(queryObj);
    setGirl(data.girl);
  }, [id, setGirl]);

  React.useEffect(() => {
    fetchGirl();
  }, []);

  return (
    <>
      {girl && (
        <>
          {girl?.name}
          {girl?.age}
          {girl?.score}
        </>
      )}
    </>
  );
};

export default Detail;

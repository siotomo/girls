import * as React from 'react';
import { useParams } from 'react-router-dom';
import { graphqlQuery } from '../../lib/graphql';
import * as gql from 'gql-query-builder';
import { axios } from '../../lib/axios';

type Girl = {
  id: number;
  name: string;
  age: number;
  score: number;
}

const Detail: React.FC = () => {
  const [girl, setGirl] = React.useState<Girl>();
  const { id } = useParams() as { id: string };

  const fetchGirl = React.useCallback(async (): Promise<void> => {
    const data = await axios().get(`/api/girls/${id}`)
    setGirl(data.data)
  },[id])

  React.useEffect(() => {
    fetchGirl();
  }, [fetchGirl]);

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

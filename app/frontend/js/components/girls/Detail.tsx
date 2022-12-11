import * as React from 'react';
import { useParams } from 'react-router-dom';
import { graphqlQuery } from '../../lib/graphql';

type Girl = {
  id: number;
  name: string;
  age: number;
  score: number;
};

const Detail: React.FC = () => {
  const [girl, setGirl] = React.useState<Girl>();
  const { id } = useParams<{ id: string }>();
  console.log("detail");
  const hoge = 1;

  const fetchGirl = React.useCallback(async (): Promise<void> => {
    const queryObj = {
      operation: 'girl',
      variables: { id },
      fields: ['id', 'name'],
    };
    const data = await graphqlQuery(queryObj);
    setGirl(data.girls[0]);
  }, [id]);

  React.useEffect(() => {
    void fetchGirl();
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

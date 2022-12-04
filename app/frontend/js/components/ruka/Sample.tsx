import * as React from 'react';
import { graphqlQuery } from '../../lib/graphql';

type Girl = {
  id: number;
  name: string;
  age: number;
  score?: number;
};

const Sample: React.FC = () => {
  const [girls, setGirls] = React.useState<Girl[]>();
  const [girl, setGirl] = React.useState<Girl>();
  const fetchGirls = React.useCallback(async () => {
    const queryObj = {
      operation: 'girls',
      fields: ['id', 'name', 'age'],
    };
    const data = await graphqlQuery(queryObj);
    setGirls(data.girls);
  }, []);

  const fetchGirl = React.useCallback(async () => {
    const queryObj = {
      operation: 'girl',
      fields: ['id', 'name', 'age'],
    };
    const data = await graphqlQuery(queryObj);
    setGirl(data.girls[0]);
  }, []);

  React.useEffect(() => {
    (async (): Promise<void> => {
      await fetchGirl();
    })();
  }, [fetchGirl]);

  React.useEffect(() => {
    fetchGirls();
    fetchGirl();
  }, [fetchGirls, fetchGirl]);

  return (
    <>
      <h3>Sample Page</h3>

      <h3>Girl</h3>
      {!!girl && (
        <>
          <p>------------</p>
          <p>{girl.id}</p>
          <p>{girl.name}</p>
          <p>{girl.age}</p>
          <p>------------</p>
        </>
      )}
      <p>------------</p>
      <p>------------</p>

      <h3>Girls</h3>
      {!!girls &&
        girls.map((girl) => (
          <>
            <p>------------</p>
            <p>{girl.id}</p>
            <p>{girl.name}</p>
            <p>{girl.age}</p>
            <p>------------</p>
          </>
        ))}
    </>
  );
};

export default Sample;

import * as React from 'react';
import { axios } from '../../lib/axios';
import  { query } from 'gql-query-builder'

type Girl = {
  id: number;
  name: string;
  age: number;
  score?: number;
}

const Sample: React.FC = () => {
  const [girls, setGirls] = React.useState<Girl[]>();
  const fetchGirls = React.useCallback(async () => {
    const res = await axios().post('/graphql', query({
        operation: 'girls',
        fields: ['id', 'name', 'age']
      })
    );
    const girls = res.data.data.girls;
    setGirls(girls)
  },[])

  React.useEffect(() => {
    fetchGirls();
  }, []);

  return (
    <>
      <h3>
        Sample Page
      </h3>

      {!!girls && girls.map(girl => (
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

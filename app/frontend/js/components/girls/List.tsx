import * as React from 'react';
import {
  Link
} from 'react-router-dom';
import { graphqlQuery } from '../../lib/graphql';

type Girl = {
  id: number;
  name: string;
  age: number;
  score: number;
}

const List: React.FC = () => {
  const [girls, setGirls] = React.useState<Girl[]>([]);

  const fetchGirls = React.useCallback(async () => {
    const queryObj = {
      operation: 'girls',
      fields: ['id', 'name', 'age']
    }
    const data = await graphqlQuery(queryObj)
    setGirls(data.girls)  
  }, []);

  React.useEffect(() => {
    fetchGirls();
  }, []);

  return (
    <>
      {!!girls.length && girls.map((girl) => {
        return (
          <Link to={`/api/girls/${girl.id}`} key={girl.id}>
            <p>age: {girl.age} name: {girl.name}</p>
          </Link>
        )
      })}
    </>
  );
};

export default List;

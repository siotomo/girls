import * as React from 'react';
import { Link } from 'react-router-dom';
import { graphqlQuery } from '../../lib/utils/graphql';
import { GirlModel } from '../../lib/interface/model';

const List: React.FC = () => {
  const [girls, setGirls] = React.useState<GirlModel[]>([]);

  const fetchGirls = React.useCallback(async () => {
    const queryObj = {
      operation: 'girls',
      fields: ['id', 'name', 'age'],
    };
    const res = await graphqlQuery(queryObj);
    setGirls(res.data.data.girls);
  }, []);

  React.useEffect(() => {
    void fetchGirls();
  }, [fetchGirls]);

  return (
    <>
      {!!girls.length &&
        girls.map((girl) => (
          <Link to={`/girls/${girl.id}`} key={girl.id}>
            <p>
              age: {girl.age} name: {girl.name}
            </p>
          </Link>
        ))}
    </>
  );
};

export default List;

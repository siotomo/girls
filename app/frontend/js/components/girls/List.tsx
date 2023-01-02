import * as React from 'react';
import CardComponent from './Card';
import TabsComponent from './Tabs';
import SearchConditionButton from './Button';
import SquareButton from './SquareButton';
import SearchInputButton from './SearchInput';
import { Link } from 'react-router-dom';
import { graphqlQuery } from '../../lib/graphql';

type Girl = {
  id: number;
  name: string;
  age: number;
  score: number;
};

const List: React.FC = () => {
  const [girls, setGirls] = React.useState<Girl[]>([]);

  const fetchGirls = React.useCallback(async () => {
    const queryObj = {
      operation: 'girls',
      fields: ['id', 'name', 'age'],
    };
    const data = await graphqlQuery(queryObj);
    setGirls(data.girls);
  }, []);

  React.useEffect(() => {
    void fetchGirls();
  }, [fetchGirls]);

  return (
    <>
      <div className='list_wrapper'>
        <div className='list_search_area'>
          <div className='list_search_area--condition_area'>
            <TabsComponent />
            <div className='list_search_area--condition_area--wrapper'>
              <div className='list_search_area--condition_area--wrapper--buttons'>
                <SearchConditionButton text={'出勤日で検索する'} />
                <SearchConditionButton text={'条件で検索する'} />
                <SearchInputButton text={'条件で検索する'} />
              </div>
              <SquareButton text={'並び替え: 新着順'} />
            </div>
          </div>
        </div>

        <div className='list_search_result_area'>
          {!!girls.length && girls.map((girl) => {
            return (
              <Link className='m-width300px' to={`/girls/${girl.id}`} key={girl.id}>
                <CardComponent girl={girl} />
              </Link>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default List;



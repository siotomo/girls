import * as React from 'react';
import SearchResultCard from '../components/girls/index/SearchResultCard';
import SearchTabs from '../components/girls/index/SearchTabs';
import SearchConditionButton from '../components/girls/index/SearchConditionButton';
import SquareButton from '../components/girls/index/SquareButton';
import SearchInputButton from '../components/girls/index/SearchInput';
import { graphqlQuery } from '../modules/graqhql';
import { GirlModel } from '../lib/interface/model';


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
    <div className="list_wrapper">
      <div className="list_search_area">
        <div className="list_search_area--condition_area">
          <SearchTabs />
          <div className="list_search_area--condition_area--wrapper">
            <div className="list_search_area--condition_area--wrapper--buttons">
              <SearchConditionButton text={'出勤日で検索する'} />
              <SearchConditionButton text={'条件で検索する'} />
              <SearchInputButton text={'条件で検索する'} />
            </div>
            <SquareButton text={'並び替え: 新着順'} />
          </div>
        </div>
      </div>

      <div className="list_search_result_area">
        {
          !!girls.length && (
            girls.map((girl) => <SearchResultCard girl={girl} key={girl.id}/>)
          )
        }
      </div>
    </div>
  );
};

export default List;

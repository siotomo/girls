import * as React from 'react';
import CardComponent from './Card';
import TabsComponent from './Tabs';
import ButtonComponent from './Button';
import SquareButtonComponent from './SquareButton';
import SearchComponent from './Search';
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
      <div style={{
        position: 'relative',
        background: '#FFFFFF',
      }}>
        {/* search-area */}
        <div style={{
          height: '400px',
          boxSizing: 'border-box',
          left: '0%',
          right: '0%',
          top: '12.34%',
          bottom: '0%',
          background: '#16213E',
          border: '1px solid #16213E',
        }}>
          <div style={{
            margin: 'auto',
            width: '70%',
            marginTop: '50px',
          }}>
            <TabsComponent />
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end'
            }}>
              <div style={{
                marginTop: '50px',
                display: 'flex',
                flexDirection: 'column',
                height: '220px',
                justifyContent: 'space-between'
              }}>
                <ButtonComponent text={'出勤日で検索する'} />
                <ButtonComponent text={'条件で検索する'} />
                <SearchComponent text={'条件で検索する'} />
              </div>
              <SquareButtonComponent text={'並び替え: 新着順'} />
            </div>
          </div>
          {/* Tabs */}
          {/* <Tabs
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab
              disableRipple
            />
            <Tab
              disableRipple
            />
            <Tab
              disableRipple
            />
          </Tabs> */}
        </div>

        {/* search-result-area */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          margin: 'auto',
          width: '1050px',
          marginTop: '30px',
        }}>
          {!!girls.length && girls.map((girl) => {
            return (
              <Link style={{width: '300px'}} to={`/girls/${girl.id}`} key={girl.id}>
                <CardComponent girl={girl} />
              </Link>
            )
          })}
        </div>
      </div>
      {/* <div style={{}}></div> */}
    </>
  );
};

export default List;



import * as React from 'react';
import CardComponent from './Card';
import TabsComponent from './Tabs';
import ButtonComponent from './Button';
import SquareButtonComponent from './SquareButton';
import SearchComponent from './Search';

const List: React.FC = () => {

  return (
    <>
      <div style={{
        position: 'relative',
        background: '#FFFFFF',
      }}>
        {/* search-area */}
        <div style={{
          height: '300px',
          boxSizing: 'border-box',
          left: '0%',
          right: '0%',
          top: '12.34%',
          bottom: '0%',
          background: '#16213E',
          border: '1px solid #16213E',
        }}>
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
          <TabsComponent />
          <ButtonComponent text={'出勤日で検索する'} />
          <ButtonComponent text={'条件で検索する'} />
          <SearchComponent text={'条件で検索する'} />
          <SquareButtonComponent text={'並び替え: 新着順'} />
        </div>

        {/* search-result-area */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          margin: 'auto',
          width: '70%',
          marginTop: '30px',
        }}>
          {[1, 2, 3, 4, 5, 6].map(() => {
            return <CardComponent />
          })}
        </div>
      </div>
      {/* <div style={{}}></div> */}
    </>
  );
};

export default List;



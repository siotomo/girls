import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const SearchTabs: React.FC = () => {
  return (
    <Tabs
      value={'one'}
      textColor="primary"
      indicatorColor="primary"
      aria-label="primary prevent tabs example"
    >
      <Tab style={{ border: '1px solid #FFFFFF' }} value="one" label="嬢一覧(122)" />
      <Tab style={{ border: '1px solid #FFFFFF' }} value="two" label="人気の嬢ランキング" />
      <Tab style={{ border: '1px solid #FFFFFF' }} value="three" label="本日空いてる嬢一覧" />
    </Tabs>
  );
};

export default SearchTabs

;
import * as React from 'react';
import { Link } from 'react-router-dom';

const buildRukaPath = (pathName: string) => `/ruka${pathName}`

const Index: React.FC = () => {
  return (
    <>
      <Link to={buildRukaPath('/sample')}>To SamplePage</Link>
      <Link to={buildRukaPath('/hoge')}>To HogePage</Link>
    </>
  );
};

export default Index;

import * as React from 'react';
import { Link } from 'react-router-dom';

const buildRukaPath = (pathName: string) => `/ruka${pathName}`;

const Index: React.FC = () => (
    <>
      <p>
        <Link to={buildRukaPath('/sample')}>To SamplePage</Link>
      </p>
      <p>
        <Link to={buildRukaPath('/hoge')}>To HogePage</Link>
      </p>
    </>
  );

export default Index;

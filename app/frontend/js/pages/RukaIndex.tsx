import * as React from 'react';
import {
  Switch,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import Sample from '../components/ruka/sample';
import Hoge from '../components/ruka/hoge';
import Index from '../components/ruka/Index';

const RukaIndex: React.FC = () => {
  const location = useLocation();
  const buildRukaPath = (pathName: string) => `/ruka${pathName}`

  React.useEffect(() => {
    window.scrollTo(0,100);
  }, [location]);

  return (
    <>
      <h1 onClick={() => alert(buildRukaPath(''))}>RukaIndex.tsx</h1>
      <Switch>
        <Route exact path={buildRukaPath('')}>
          <Index/>
        </Route>
        <Route path={buildRukaPath('/sample')}>
          <Sample/>
        </Route>
        <Route path={buildRukaPath('/hoge')}>
          <Hoge/>
        </Route>
      </Switch>
    </>
  )
}

export default RukaIndex;

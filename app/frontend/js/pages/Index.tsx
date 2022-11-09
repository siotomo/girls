import * as React from 'react';
import {
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
} from 'react-router-dom';
import First from '../components/test/First';
import Second from '../components/test/Second';
import SecondParam from '../components/test/SecondParam';

const Index: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log('new url comes');
    window.scrollTo(0,100);
  }, [location]);

  return (
    <>
      Hi! This is index page

      <Link to="/first">To First Page</Link>
      <Link to="/second">To Second Page</Link>
      <Link to="/second/12345">Redirect to Second Page With Params</Link>
      <Link to="/error">To Error Page</Link>
      <Link to="/hoge">Redirect to First Page</Link>

      <Switch>
        <Route path="/first">
          <First/>
        </Route>
        <Route exact path="/second">
          <Second/>
        </Route>
        <Route path="/second/:id(\d+)">
          <SecondParam />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
};

export default Index;

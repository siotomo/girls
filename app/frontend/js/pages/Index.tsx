import * as React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import GirlList from '../components/girls/GirlList';
import GirlShow from '../components/girls/GirlShow';

const Index: React.FC = () => {

  return (
    <Switch>
      <Route exact path="/">
        <GirlList />
      </Route>
      <Route path="/api/girls/:id(\d+)">
        <GirlShow />
      </Route>
    </Switch>
  );
};

export default Index;

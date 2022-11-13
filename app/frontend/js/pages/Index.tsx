import * as React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import List from '../components/girls/List';
import Detail from '../components/girls/Detail';

const Index: React.FC = () => {

  return (
    <Switch>
      <Route exact path="/">
        <List />
      </Route>
      <Route path="/api/girls/:id(\d+)">
        <Detail />
      </Route>
    </Switch>
  );
};

export default Index;

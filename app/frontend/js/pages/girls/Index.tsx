import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/shared/header';
import List from '../../components/girls/List';
import Detail from '../../components/girls/Detail';
import '../../../stylesheets/application.scss';

const Index: React.FC = () => {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/girls">
          <List />
        </Route>
        <Route path="/girls/:id(\d+)">
          <Detail />
        </Route>
      </Switch>
    </>
  );
};

export default Index;
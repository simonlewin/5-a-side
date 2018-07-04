import React, { Fragment } from 'react';

import { Route, Switch, Link } from 'react-router-dom';

import Header from './components/Header';
import FourOhFour from './components/FourOhFour';

import Players from './containers/Players'
import Add from './containers/Add'
import Teams from './containers/Teams'

const App = () => (
  <Fragment>
    <Header>Team Picker</Header>

    <Players />

    {/* <Switch>
      <Route exact path='/' component= { Teams } />
      <Route exact path='/players/add' component= { Add } />
      <Route exact path='/players' component= { Players } />
      <Route component={ FourOhFour } />
    </Switch> */}
  </Fragment>
);

export default App;

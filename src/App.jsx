import React, { Fragment } from 'react';

import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import FourOhFour from './components/FourOhFour';

import Players from './containers/Players'
import Teams from './containers/Teams'

const App = () => (
  <Fragment>
    <Header>Team Picker</Header>

    {/* <Players /> */}

    <Switch>
      <Route exact path='/' component={ Players } />
      <Route exact path='/teams' component={ Teams } />
      <Route component={ FourOhFour } />
    </Switch>
  </Fragment>
);

export default App;

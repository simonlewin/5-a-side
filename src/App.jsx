import React, { Fragment } from 'react';

import Header from './components/Header';

import Add from './containers/Add'
import Players from './containers/Players'
import Teams from './containers/Teams'

const App = () => (
  <Fragment>
    <Header>Team Picker</Header>
    <Add />
    <Players />
    <Teams />
  </Fragment>
);

export default App;

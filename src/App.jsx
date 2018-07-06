import React, { Fragment } from 'react';

import { Route, Switch } from 'react-router-dom';

// import components
import Header from './components/Header';
import FourOhFour from './components/FourOhFour';

// import container components
import Players from './containers/Players'
import Teams from './containers/Teams'

const App = () => (
  <Fragment>
    <Header>5-a-Side Team Picker</Header>
    {/* use react-router switch to handle 404s */}
    <Switch>
      <Route exact path='/' component={ Players } />
      <Route exact path='/teams' component={ Teams } />
      <Route component={ FourOhFour } />
    </Switch>
  </Fragment>
);

export default App;

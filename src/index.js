import React from 'react';
import ReactDOM from 'react-dom';

// import the react-router component
import { BrowserRouter as Router } from 'react-router-dom';

// import redux createStore 
import { createStore } from 'redux';

import reducer from './data/reducer'
import initial from './data/initial'

// import the App component
import App from './App';

// react-redux
import { Provider } from 'react-redux';

// left over from create-react-aspp bootstrap
import registerServiceWorker from './registerServiceWorker';

import './css/styles.css';

// create redux store, pass it reducer and initial state
// link up Redux Dev Tools
const store = createStore(
	reducer, 
	initial, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// wrap App in react-redux Provider component
// to make store available in the app
// wrap in Router component to give routes
ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();

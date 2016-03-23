// Immutable dev tools makes for easier viewing of Maps and Lists in the
// Chrome Developer tools.
import Immutable from 'immutable';
import installDevTools from 'immutable-devtools';
installDevTools(Immutable);

import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';


import configureStore from './store/configureStore';
import configureRoutes from './routes/';

const history = browserHistory;

// grab the initialState from the server.
const initialState = window.__INITIAL_STATE__;
// turn the immutable properties back to immutable
initialState.counter = Immutable.fromJS(initialState.counter);

const store = configureStore(initialState);

const rootElement = document.getElementById('root');

render((
  <Provider store={store}>
    {configureRoutes(history)}
  </Provider>
), rootElement);

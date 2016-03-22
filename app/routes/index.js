import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '../containers/App/';
import Hello from '../components/Hello/';

export default function configureRoutes(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Hello} />
      </Route>
    </Router>
  );
}

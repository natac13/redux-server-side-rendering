import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '../containers/App/';
import Hello from '../components/Hello/';
import Login from '../components/Login/';
import Profile from '../components/Profile/';

export default function configureRoutes(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Hello} />
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />

    </Router>
  );
}

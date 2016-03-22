import express from 'express';
import path from 'path';
import Promise from 'bluebird';
import compression from 'compression';

// react and redux stuff
import React from 'react';
import { renderToString } from 'react-dom/server';
import createLocation from 'history/lib/createLocation';
import {
  RouterContext,
  match,
  createMemoryHistory,
} from 'react-router';

import configureStore from '../app/store/configureStore';
import configureRoutes from '../app/routes/';

import { Provider } from 'react-redux';

// webpack setup
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';
const compiler = webpack(webpackConfig);

function renderFullPage(html, initialState) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name=viewport content="width=device-width, initial-scale=1">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>React Redux Server Side Attempt</title>
      <!-- <link rel=stylesheet href="/build/style.css"> -->
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        window.__INITIAL_STATE__ = ${initialState}
      </script>
      <script src="/build/bundle.js"></script>

    </body>
    </html>
  `;
}
function handleRender(req, res) {
  // create history
  const history = createMemoryHistory();
  // create new redux store instance every request
  const store = configureStore();
  // create routes
  const routes = configureRoutes(history);
  // create a location from the req.url
  const location = createLocation(req.url);
  // optional dispatch any actions, eg logging in a user.

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      res.status(500).send(error.message);
    } else if (renderProps === null) {
      res.status(404).send('Not Found');
    } else {
      // pass the state from the store to the client
      const initialState = JSON.stringify(store.getState());
      console.log(initialState);
      console.log('server state');
      // create htmlString of components
      const html = renderToString(
        <Provider store={store}>
          { <RouterContext { ...renderProps } /> }
        </Provider>
      );

      res.send(renderFullPage(html, initialState));
    }
  });
}


const isDevelopment = process.env.NODE_ENV !== 'production';
const app = express();

if (isDevelopment) {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(compression());
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', handleRender);

const port = process.env.PORT || 3013;


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

export default app;

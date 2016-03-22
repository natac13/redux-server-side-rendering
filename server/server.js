import express from 'express';
import path from 'path';
import Promise from 'bluebird';
import compression from 'compression';

// react and redux stuff
import React from 'react';
import { renderToString } from 'react-dom/server';
import createLocation from 'history/lib/createLocation';
import {
  RoutingContext,
  match,
  createMemoryHistory,
} from 'react-router';

import { Provider } from 'react-redux';

// webpack setup
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';
const compiler = webpack(webpackConfig);

const isDevelopment = process.env.NODE_ENV !== 'production';
const app = express();

if (isDevelopment) {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
}

// react and redux stuff I author
import createRoutes from '../app/routes/';
import configureStore from '../app/store/configureStore';

app.use(compression());
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

const port = process.env.PORT || 3013;


app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
});



export default app;

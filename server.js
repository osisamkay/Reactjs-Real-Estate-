require('dotenv').config();
const express = require('express');
const path = require('path');
const helmet = require('helmet');

// Port should match webpack config URL
const port = 7800;

const app = express();

// Enable Hot Module Replacement
if(process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const config = require('../webpack.config');
  const compiler = webpack(config);
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: config.output.publicPath,
    stats: { colors: true },
    historyApiFallback: true
  }));

  app.use(webpackHotMiddleware(compiler, {
    path: '/__webpack_hmr',
    heartbeat: 2000
  }));
}
// End Hot Module Replacement addition

app.use(helmet());

app.use(express.static(path.join(__dirname, 'docs')));

app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs/index.html'));
});

app.listen(process.env.PORT || port, () => {
  console.log(`Listening on port ${port}`);
});

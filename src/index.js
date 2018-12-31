
import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';

render(<Routes />, document.getElementById('app'));

if(module.hot) {
  module.hot.accept();
}

// Module Start
// Main
// JS imports
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import * as serviceWorker from './serviceWorker';
// SASS imports
import './sass/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// Service Worker
serviceWorker.unregister();
// Module End

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <Router basename={process.env.PUBLIC_URL}>
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
serviceWorker.unregister();

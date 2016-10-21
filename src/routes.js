import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
);

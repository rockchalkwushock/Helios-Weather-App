import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { Dashboard, Layout } from './components/MyComponents';
import { SearchBarContainer } from './containers/MyContainers';

export default (
    <Route path='/' component={ Layout }>
      <IndexRoute component={ SearchBarContainer } />
      <Route path='/dashboard' component={ Dashboard } />
    </Route>
);

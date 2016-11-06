import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { Dashboard, Layout } from './components/MyComponents';
// import { SearchBarContainer } from './containers/MyContainers';
// NOTE: Was setting this as an index route to '/' so it would disappear from
// the Layout `onSubmit`.

export default (
    <Route path='/' component={ Layout }>
      <Route path='/dashboard' component={ Dashboard } />
    </Route>
);

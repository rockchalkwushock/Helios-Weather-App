import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from './components/MyComponents';
import { CurrentWeatherContainer } from './containers/MyContainers';

export default (
    <Route path='/' component={ App }>
      <Route path='/dashboard' component={ CurrentWeatherContainer }/>
    </Route>
);

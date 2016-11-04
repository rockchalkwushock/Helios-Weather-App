import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App, Dashboard } from './components/MyComponents';
import { CurrentWeatherContainer, ForecastContainer } from './containers/MyContainers';

export default (
    <Route path='/' component={ App }>
      <Route path='/dashboard' component={ Dashboard }>
        <Route path='/dashboard/current' component={ CurrentWeatherContainer }></Route>
        <Route path='/dashboard/' component={ ForecastContainer }></Route>
      </Route>
    </Route>
);

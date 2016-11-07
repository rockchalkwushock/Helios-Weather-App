import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { Dashboard, Layout } from './components/MyComponents';
import { CurrentWeatherContainer, ForecastContainer, SearchBarContainer } from './containers/MyContainers';

export default (
    <Route path='/' component={ Layout }>
      <Route path='/dashboard' component={ Dashboard } />
      <Route path='/currentweather' component={ CurrentWeatherContainer } />
      <Route path='/forecast' component= { ForecastContainer } />
    </Route>
);

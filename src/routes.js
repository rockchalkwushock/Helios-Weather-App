import React from 'react';
import { Route } from 'react-router';

import { Dashboard, Layout } from './components/index';
import { CurrentWeatherContainer, ForecastContainer } from './containers/index';

export default (
    <Route path='/' component={Layout}>
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/currentweather' component={CurrentWeatherContainer} />
      <Route path='/forecast' component={ForecastContainer} />
    </Route>
);

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import currentWeatherReducer from './reducer_current';
import forecastReducer from './reducer_forecast';

const rootReducer = combineReducers({
  current: currentWeatherReducer,
  forecast: forecastReducer,
  routing: routerReducer
});

export default rootReducer;

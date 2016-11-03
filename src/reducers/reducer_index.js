import { combineReducers } from 'redux';

import backgroundReducer from './reducer_background';
import currentWeatherReducer from './reducer_current';
import forecastReducer from './reducer_forecast';

const rootReducer = combineReducers({
  background: backgroundReducer,
  current: currentWeatherReducer,
  forecast: forecastReducer
});

export default rootReducer;

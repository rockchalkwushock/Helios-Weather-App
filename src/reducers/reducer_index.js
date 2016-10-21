import { combineReducers } from 'redux';

import currentWeatherReducer from './reducer_current';
import forecastReducer from './reducer_forecast';

const rootReducer = combineReducers({
  current: currentWeatherReducer,
  forecast: forecastReducer
});

export default rootReducer;

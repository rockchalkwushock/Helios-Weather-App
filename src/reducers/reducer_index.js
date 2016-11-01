import { combineReducers } from 'redux';

import backgroundReducer from './reducer_background';
import cwImageReducer from './reducer_cw_icon';
import currentWeatherReducer from './reducer_current';
import forecastReducer from './reducer_forecast';

const rootReducer = combineReducers({
  current: currentWeatherReducer,
  forecast: forecastReducer,
  cw_image: cwImageReducer,
  background: backgroundReducer
});

export default rootReducer;

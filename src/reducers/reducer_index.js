import { combineReducers } from 'redux';

// import backgroundReducer from './reducer_background';
import currentWeatherReducer from './reducer_current';
import cwImageReducer from './reducer_cw_icon';
import forecastReducer from './reducer_forecast';

const rootReducer = combineReducers({
  // background: backgroundReducer,
  current: currentWeatherReducer,
  cw_image: cwImageReducer,
  forecast: forecastReducer
});

export default rootReducer;

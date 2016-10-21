import { combineReducers } from 'redux';

import forecastReducer from './reducer_forecast';

const rootReducer = combineReducers({
  forecast: forecastReducer
});

export default rootReducer;

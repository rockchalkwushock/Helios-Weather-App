import { combineReducers } from 'redux/es';
import { routerReducer } from 'react-router-redux';
import { weatherReducer } from '../../modules';

/**
 * rootReducer(arg)
 * - @param {Object} reducers
 * - @returns {Function}
 */
export default combineReducers({
  routing: routerReducer,
  weather: weatherReducer,
});

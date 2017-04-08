import { combineReducers } from 'redux/es';
import { weatherReducer } from '../../modules';

/**
 * rootReducer(arg)
 * - @param {Object} reducers
 * - @returns {Function}
 */
export default combineReducers({
  weather: weatherReducer,
});

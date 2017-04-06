import { combineReducers } from 'redux/es';
import { reducer as formReducer } from 'redux-form/es';
import { weatherReducer } from '../../modules';

/**
 * rootReducer(arg)
 * - @param {Object} reducers
 * - @returns {Function}
 */
export default combineReducers({
  form: formReducer,
  weather: weatherReducer,
});

import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { currentReducer, forecastReducer } from '../../modules'

/**
 * @function rootReducer
 * @param {Object} Object of application's reducers.
 * @returns {Function} Returns function that invokes all reducers passed to it.
 */
export default combineReducers({
  current: currentReducer,
  forecast: forecastReducer,
  form: formReducer
})

import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { weatherReducer } from '../../modules'

/**
 * @function rootReducer
 * @param {Object} Object of application's reducers.
 * @returns {Function} Returns function that invokes all reducers passed to it.
 */
export default combineReducers({
  form: formReducer,
  weather: weatherReducer
})

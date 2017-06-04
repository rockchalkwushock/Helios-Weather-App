import { combineReducers } from 'redux'
import { weatherReducer } from '../../modules'

/**
 * @function rootReducer
 * @param {Object} Object of application's reducers.
 * @returns {Function} Returns function that invokes all reducers passed to it.
 */
export default combineReducers({
  weather: weatherReducer
})

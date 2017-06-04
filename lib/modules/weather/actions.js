import { FETCH_CURRENT, FETCH_ERROR, FETCH_FORECAST } from './types.js'
import { WeatherApi } from '../../utils'

const api = new WeatherApi()

/**
 * @public
 * @function fetchCurrent
 *
 * @param {Object} data
 * @returns {Object} Action
 */
const fetchCurrent = data => ({
  type: FETCH_CURRENT,
  payload: data
})

/**
 * @public
 * @function fetchError
 *
 * @param {Object} data
 * @returns {Object} Action
 */
const fetchError = data => ({
  type: FETCH_ERROR,
  payload: data
})

/**
 * @public
 * @function fetchForecast
 *
 * @param {Array<Object>} data
 * @returns {Object} Action
 */
const fetchForecast = data => ({
  type: FETCH_FORECAST,
  payload: data
})

/**
 * @public
 * @function getCurrentWeather
 *
 * @param {Object{String}} input
 * @returns {Promise<Object>}
 */
const getCurrentWeather = ({ input }) => async dispatch => {
  const data = await api.currentWeather(input)
  if (data.message) return dispatch(fetchError(data))
  return dispatch(fetchCurrent(data))
}

/**
 * @public
 * @function getHourlyForecast
 *
 * @param {Object{String}} input
 * @returns {Promise<Array>}
 */
const getHourlyForecast = ({ input }) => async dispatch => {
  const data = await api.hourlyForecast(input)
  if (data.message) return dispatch(fetchError(data))
  return dispatch(fetchForecast(data))
}

export {
  fetchCurrent,
  fetchError,
  fetchForecast,
  getCurrentWeather,
  getHourlyForecast
}

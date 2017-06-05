import { fetchError, FETCH_CURRENT } from '../constants'
import { WeatherApi } from '../../../utils'

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

export { fetchCurrent, fetchError, getCurrentWeather }

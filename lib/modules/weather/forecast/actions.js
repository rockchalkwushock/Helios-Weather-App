import { fetchError, FETCH_FORECAST } from '../constants'
import { WeatherApi } from '../../../utils'

const api = new WeatherApi()

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

export { fetchForecast, getHourlyForecast }

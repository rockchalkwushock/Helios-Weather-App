import axios from 'axios'
import currentAlgorithm from './currentAlgorithm'
import forecastAlgorithm from './forecastAlgorithm'
import './axiosConfig'

/**
 * @summary
 *
 * Weatherbit.io API Response for this.state.forecastUrl
 * - res.data comes in as {[Objects]} for this endpoint
 * - Using ES6 destructuring:
 *  { response: { data: { data } } } = [Objects]
 */

/**
 * NOTE: Necessary for running async action tests
 * because Webpack is not being used by Jest there
 * is no access to any user defined environment
 * variables at runtime.
 */
if (process.env.NODE_ENV === 'test') {
  require('dotenv-safe').load()
}

const key = process.env.API_KEY

/**
 * @export
 * @public
 * @author Cody Brunner rockchalkwushock@icloud.com
 * @class WeatherApi
 *
 * @description Class for invoking the weatherbit.io API calls.
 *
 * @method currentWeather
 * @method hourlyForecast
 */
export default class WeatherApi {
  state = {
    currentUrl: `/current/geosearch?key=${key}`,
    error: {
      message: 'Oops! Seems to be an issue right now, try back later.'
    },
    forecastUrl: `/forecast/3hourly/geosearch?key=${key}`
  }
  /**
   * @public
   * @function currentWeather
   * @description Handles all requests to the current weather api endpoint.
   * @param {String} city A city in which to search the weather.
   * @returns {Promise<Object>} Api response object massaged by algorithm.
   * @throws {Object} Error message as response if api request fails.
   * @memberof WeatherApi
   */
  currentWeather = async city => {
    const url = `${this.state.currentUrl}&city=${city}`
    try {
      const { data: { data } } = await axios.get(url)
      return currentAlgorithm(data)
    } catch (e) {
      return this.state.error
    }
  }
  /**
   * @public
   * @function hourlyForecast
   * @description Handles all requests to the forecast weather api endpoint.
   * @param {String} city A city in which to search the weather.
   * @returns {Promise<Object>} Api response object massaged by algorithm.
   * @throws {Object} Error message as response if api request fails.
   * @memberof WeatherApi
   */
  hourlyForecast = async city => {
    const url = `${this.state.forecastUrl}&city=${city}&days=1`
    try {
      const { data: { data } } = await axios.get(url)
      return forecastAlgorithm(data)
    } catch (e) {
      return this.state.error
    }
  }
}

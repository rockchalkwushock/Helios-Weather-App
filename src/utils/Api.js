import axios from 'axios';
import currentAlgorithm from './currentAlgorithm';
import forecastAlgorithm from './forecastAlgorithm';
import './axiosConfig';

/**
 * Weatherbit.io API Response
 * - res.data comes in as an {[Object]} for this endpoint.
 * - Using deconstruction:
 *   { response: { data: { data } } } gives me [Object]
 */

// Necessary for running async action tests.
// Because webpack is not being used no access
// is present to user defined process.env.<ENV VAR>.
if (process.env.NODE_ENV === 'test') {
  require('dotenv-safe').load();
}

const key = process.env.API_KEY;

/**
 * @class Api()
 *
 * @method currentWeather(arg)
 * @method hourlyForecast(arg)
 */
export default class {
  constructor() {
    this.currentUrl = `/current/geosearch?key=${key}`;
    this.error = { message: 'Oops! Seems to be an issue right now, try back later.' };
    this.forecastUrl = `/forecast/3hourly/geosearch?key=${key}`;
  }
  /**
   * currentWeather(arg)
   *
   * @param {String} city
   * @returns {Promise}
   * @returns {Object}
   */
  async currentWeather(city) {
    const url = `${this.currentUrl}&city=${city}`;
    try {
      const { data: { data } } = await axios.get(url);
      // return massaged data.
      return currentAlgorithm(data);
    } catch (e) {
      return this.error;
    }
  }
  /**
   * hourlyForecast(arg)
   *
   * @param {String} city
   * @returns {Promise}
   * @returns {Object}
   */
  async hourlyForecast(city) {
    const url = `${this.forecastUrl}&city=${city}&days=1`;
    try {
      const { data: { data } } = await axios.get(url);
      // return massaged data.
      return forecastAlgorithm(data);
    } catch (e) {
      return this.error;
    }
  }
}

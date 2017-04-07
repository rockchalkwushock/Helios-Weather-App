import axios from 'axios';
import currentAlgorithm from './currentAlgorithm';
import './axiosConfig';

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
    this.forecastUrl = `/forecast/3hourly/geosearch?key=${key}`;
  }
  /**
   * currentWeather(arg)
   *
   * @param {String} city
   * @returns {Promise}
   */
  async currentWeather(city) {
    const url = `${this.currentUrl}&city=${city}`;
    try {
      // res.data comes in as an {[Object]} for this endpoint.
      // Using deconstruction { response: { data: { data } } } gives me [Object]
      const { data: { data } } = await axios.get(url);
      const filteredData = currentAlgorithm(data);
      return filteredData;
    } catch (e) { console.error(e); } // eslint-disable-line
  }
  /**
   * hourlyForecast(arg)
   *
   * @param {String} city
   * @returns {Promise}
   */
  async hourlyForecast(city) {
    const url = `${this.forecastUrl}&city=${city}&days=1`;
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (e) { console.error(e); } // eslint-disable-line
  }
}

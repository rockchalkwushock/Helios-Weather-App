import {
  FETCH_CURRENT,
  FETCH_ERROR,
  FETCH_FORECAST,
} from './types.js';
import { Api } from '../../utils';

// Create an instance of Api();
const api = new Api();

/**
 * fetchCurrent(arg)
 *
 * @param {Object} data
 * @returns {Object} Action
 */
const fetchCurrent = data => ({
  type: FETCH_CURRENT,
  payload: data,
});

/**
 * fetchError()
 *
 * @param {Object} data
 * @returns {Object} Action
 */
const fetchError = data => ({
  type: FETCH_ERROR,
  payload: data,
});

/**
 * fetchForecast(arg)
 *
 * @param {Array} data
 * @returns {Object} Action
 */
const fetchForecast = data => ({
  type: FETCH_FORECAST,
  payload: data,
});

/**
 * getCurrentWeather(arg)
 *
 * @param {String} input
 * @returns {Promise}
 */
const getCurrentWeather = ({ input }) => async dispatch => {
  const data = await api.currentWeather(input);
  if (data.message) return dispatch(fetchError(data));
  return dispatch(fetchCurrent(data));
};

/**
 * getHourlyForecast(arg)
 *
 * @param {String} input
 * @returns {Promise}
 */
const getHourlyForecast = ({ input }) => async dispatch => {
  const data = await api.hourlyForecast(input);
  if (data.message) return dispatch(fetchError(data));
  return dispatch(fetchForecast(data));
};

export {
  fetchCurrent,
  fetchError,
  fetchForecast,
  getCurrentWeather,
  getHourlyForecast,
};

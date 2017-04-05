import { FETCH_CURRENT, FETCH_ERROR, FETCH_FORECAST } from './types';
import { Api } from '../../utils';

const api = new Api();

/**
 * fetchCurrentWeather(arg)
 * @param {Object} data
 * @returns {Object} Action
 */
const fetchCurrentWeather = data => ({
  type: FETCH_CURRENT,
  data,
});

/**
 * fetchHourlyForecast(arg)
 * @param {Object} data
 * @returns {Object} Action
 */
const fetchHourlyForecast = data => ({
  type: FETCH_FORECAST,
  data,
});

/**
 * fetchWeatherError()
 * @returns {Object} Action
 */
const fetchWeatherError = () => ({
  type: FETCH_ERROR,
});

/**
 * getCurrentWeather(arg)
 * @param {String} city
 * @returns {Promise}
 */
const getCurrentWeather = ({ input }) => async dispatch => {
  const data = await api.currentWeather(input);
  if (!data) return dispatch(fetchWeatherError());
  return dispatch(fetchCurrentWeather(data));
};

/**
 * getHourlyForecast(arg)
 * @param {String} city
 * @returns {Promise}
 */
const getHourlyForecast = city => async dispatch => {
  const data = await api.hourlyForecast(city);
  if (!data) return dispatch(fetchWeatherError());
  return dispatch(fetchHourlyForecast(data));
};

export {
  getCurrentWeather,
  getHourlyForecast,
};

import { FETCH_CURRENT, FETCH_FORECAST } from './types';
import { Api } from '../../utils';

const api = new Api();

/**
 * currWeatherAction(arg)
 * @param {Object} data
 * @returns {Object} Action
 */
const currWeatherAction = data => ({
  type: FETCH_CURRENT,
  data,
});

/**
 * forWeatherAction(arg)
 * @param {Object} data
 * @returns {Object} Action
 */
const forWeatherAction = data => ({
  type: FETCH_FORECAST,
  data,
});

/**
 * fetchCurrentWeather(arg)
 * @param {String} city
 * @returns {Promise}
 */
const fetchCurrentWeather = city => async dispatch => {
  const data = await api.currentWeather(city);
  return dispatch(currWeatherAction(data));
};

/**
 * fetchHourlyForecast(arg)
 * @param {String} city
 * @returns {Promise}
 */
const fetchHourlyForecast = city => async dispatch => {
  const data = await api.hourlyForecast(city);
  return dispatch(forWeatherAction(data));
};

export {
  fetchCurrentWeather,
  fetchHourlyForecast,
};

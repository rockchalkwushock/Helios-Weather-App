import {
  fetchCurrentWeather,
  fetchHourlyForecast,
  fetchWeatherError,
  getCurrentWeather,
  getHourlyForecast,
} from './actions';
import {
  FETCH_CURRENT,
  FETCH_ERROR,
  FETCH_FORECAST,
} from './types.js';
import weatherReducer,
{ initialState } from './reducer';

export {
  fetchCurrentWeather,
  fetchHourlyForecast,
  fetchWeatherError,
  getCurrentWeather,
  getHourlyForecast,
  FETCH_CURRENT,
  FETCH_ERROR,
  FETCH_FORECAST,
  initialState,
  weatherReducer,
};

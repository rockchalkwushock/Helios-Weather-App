import { currentReducer, fetchCurrent, getCurrentWeather } from './current'
import { fetchForecast, forecastReducer, getHourlyForecast } from './forecast'
import {
  fetchError,
  initialState,
  FETCH_CURRENT,
  FETCH_ERROR,
  FETCH_FORECAST
} from './constants'

export {
  currentReducer,
  fetchCurrent,
  fetchError,
  fetchForecast,
  forecastReducer,
  getCurrentWeather,
  getHourlyForecast,
  initialState,
  FETCH_CURRENT,
  FETCH_ERROR,
  FETCH_FORECAST
}

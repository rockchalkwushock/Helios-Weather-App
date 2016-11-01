import axios from 'axios';
import { API_KEY, CURRENT_ROOT_URL, FORECAST_ROOT_URL } from '../config';

export const FETCH_CURRENT_WEATHER = 'FETCH_CURRENT_WEATHER';
export const FETCH_FORECAST = 'FETCH_FORECAST';

// NOTE: Fetches the api data for Current Weather.
export const fetchCurrentWeather = (city) => {
  const url = `${CURRENT_ROOT_URL}&q=${city},us`;
  const promise = new Promise((resolve, reject) => {
    axios.get(url)
         .then(res => resolve(res.data))
         .catch(err => reject(err));

  });
  return {
    type: FETCH_CURRENT_WEATHER,
    payload: promise
  };
};

// NOTE: Fetches the api data for 3-hourly Forecast.
export const fetchForecast = (city) => {
  const url = `${FORECAST_ROOT_URL}&q=${city},us`;
  const promise = new Promise((resolve, reject) => {
    axios.get(url)
         .then(res => resolve(res.data))
         .catch(err => reject(err));
  });
  return {
    type: FETCH_FORECAST,
    payload: promise
  };
};

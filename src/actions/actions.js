import axios from 'axios';
import { API_KEY, CURRENT_ROOT_URL, FORECAST_ROOT_URL } from '../config';

export const FETCH_CURRENT_WEATHER = 'FETCH_CURRENT_WEATHER';
export const FETCH_FORECAST = 'FETCH_FORECAST';
export const FETCH_CW_ICON = 'FETCH_CW_ICON';
export const FETCH_BACKGROUND = 'FETCH_BACKGROUND';

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

// NOTE: Fetches the weather code for corresponding icon.
export const fetchCurrentWeatherIcon = (city) => {
  const url = `${CURRENT_ROOT_URL}&q=${city},us`;
  const promise = new Promise((resolve, reject) => {
    axios.get(url)
         .then(res => resolve(res.data.weather[0].id))
         .catch(err => reject(err));
  });
  return {
    type: FETCH_CW_ICON,
    payload: promise
  };
};

// NOTE: Fetches background for corresponding time of day & weather condition.
export const fetchBackground = (city) => {
  const url = `${CURRENT_ROOT_URL}&q=${city},us`;
  const promise = new Promise((resolve, reject) => {
    axios.get(url)
         .then(res => resolve(res.data.sys))
         .catch(err => reject(err));
  });
  return {
    type: FETCH_BACKGROUND,
    payload: promise
  };
};

import axios from 'axios';

const API_KEY = '36b647d02ca19e41cd06d535560d2752';
const CURRENT_ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
const FORECAST_ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const CURRENT_WEATHER = 'CURRENT_WEATHER';
export const FETCH_FORECAST = 'FETCH_FORECAST';


export const fetchCurrentWeather = (city) => {
  const url = `${CURRENT_ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  // console.log('Request Current Weather: ', request);

  return {
    type: CURRENT_WEATHER,
    payload: request
  };
};

export const fetchForecast = (city) => {
  const url = `${FORECAST_ROOT_URL}&q=${city},us`; // {countrycode} set to static: USA
  const request = axios.get(url); // this is my AJAX request.

  // console.log('Request Forecast: ', request);

  return {
    type: FETCH_FORECAST,
    payload: request
  };
};

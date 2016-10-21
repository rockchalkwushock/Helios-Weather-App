import axios from 'axios';

const API_KEY = '36b647d02ca19e41cd06d535560d2752';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_FORECAST = 'FETCH_FORECAST';

export function fetchForecast(city) {
  const url = `${ROOT_URL}&q=${city},us`; // {countrycode} set to static: USA
  const request = axios.get(url); // this is my AJAX request.

  console.log('Request: ', request);

  return {
    type: FETCH_FORECAST,
    payload: request
  };
}

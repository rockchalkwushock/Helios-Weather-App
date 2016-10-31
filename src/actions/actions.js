import axios from 'axios';


// Pull out and put in a config file.
const API_KEY = '36b647d02ca19e41cd06d535560d2752';
const CURRENT_ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
const FORECAST_ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const CURRENT_WEATHER = 'CURRENT_WEATHER';
export const FETCH_FORECAST = 'FETCH_FORECAST';


export const fetchCurrentWeather = (city) => {
  const url = `${CURRENT_ROOT_URL}&q=${city},us`;
  const promise = new Promise((resolve, reject) => {
    axios.get(url)
         .then(res => resolve(res.data))
         .catch(err => reject(err));
  });
  console.log(promise);
  return {
    type: CURRENT_WEATHER,
    payload: promise
  };
};
// console.log(fetchCurrentWeather('Wichita'));

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

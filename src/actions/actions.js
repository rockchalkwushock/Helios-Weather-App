import axios from 'axios';
import { API_KEY, CURRENT_ROOT_URL, FORECAST_ROOT_URL } from '../config';
import { FETCH_BACKGROUND, FETCH_CURRENT_WEATHER, FETCH_FORECAST } from './ActionTypes';
import { unitConverter } from '../local_modules/conversions';
import { changeAppBackground } from '../local_modules/background';
import { weatherConditionCheck } from '../local_modules/conditions';


// NOTE: Fetches the api data for Current Weather.
export const fetchCurrentWeather = (city) => {
  const url = `${CURRENT_ROOT_URL}&q=${city},us`;
  const promise = new Promise((resolve, reject) => {
    axios.get(url)
         .then(res => {
           const data = res.data;
           const prefix = 'wi wi-owm-';
           const code = data.weather[0].id;
           const icon = prefix + code;
           const weatherData = {
             humidity: data.main.humidity,
             icon,
             name: data.name,
             pressure: unitConverter.toInchesHG(data.main.pressure),
             sunrise: unitConverter.toGMT(data.sys.sunrise),
             sunset: unitConverter.toGMT(data.sys.sunset),
             temp: unitConverter.toFarenheit(data.main.temp),
             winddir: unitConverter.toCardinal(data.wind.deg),
             windspd: unitConverter.toMPH(data.wind.speed)
           };
           resolve(weatherData);
         })
         .catch(err => reject(err));

  });
  // console.log(promise);
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
         .then(res => {
           const data = res.data;
           const convertedData = data.list.slice(0,4).map(item => {
             let code = item.weather[0].id;
             let icon = 'wi wi-owm-' + code;
             return({
               icon,
               time: unitConverter.toGMT(item.dt),
               temp: unitConverter.toFarenheit(item.main.temp),
               winddir: unitConverter.toCardinal(item.wind.deg),
               windspd: unitConverter.toMPH(item.wind.speed)
             });
           });
           resolve(convertedData);
         })
         .catch(err => reject(err));
  });
  return {
    type: FETCH_FORECAST,
    payload: promise
  };
};

// NOTE: Fetches data needed for updating background image.
// export const fetchBackground = (city) => {
//   const url = `${CURRENT_ROOT_URL}&q=${city},us`;
//   const promise = new Promise((resolve, reject) => {
//     axios.get(url)
//          .then(res => {
//            const data = res.data;
//            const sunrise = data.sys.sunrise;
//            const sunset = data.sys.sunset;
//            const code = data.weather[0].id;
//            const condition = weatherConditionCheck.codeToIdentifier(code);
//            const time = changeAppBackground.getTime();
//            const sunup = changeAppBackground.convertSunrise(sunrise);
//            const sundown = changeAppBackground.convertSunset(sunset);
//            const id = changeAppBackground.getIdentifier(time, sunup, sundown);
//            const image = changeAppBackground.setBackground(id, condition);
//            resolve(image);
//          })
//          .catch(err => reject(err));
//
//   });
//   return {
//     type: FETCH_BACKGROUND,
//     payload: promise
//   };
// };

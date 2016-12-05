import axios from 'axios';
import { CURRENT_ROOT_URL } from '../config';
import { FETCH_CURRENT_WEATHER } from './types';
import { unitConverter } from '../local_modules/conversions';

// NOTE: Fetches the api data for Current Weather.
export default (city) => {
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
  return {
    type: FETCH_CURRENT_WEATHER,
    payload: promise
  };
};

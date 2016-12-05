import axios from 'axios';
import { FORECAST_ROOT_URL } from '../config';
import { FETCH_FORECAST } from './types';
import { unitConverter } from '../local_modules/conversions';

// NOTE: Fetches the api data for 3-hourly Forecast.
export default (city) => {
  const url = `${FORECAST_ROOT_URL}&q=${city},us`;
  const promise = new Promise((resolve, reject) => {
    axios.get(url)
         .then(res => {
           const data = res.data;
           const convertedData = data.list.slice(0, 4).map(item => {
             const code = item.weather[0].id;
             const icon = `wi wi-owm-${code}`;
             return ({
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

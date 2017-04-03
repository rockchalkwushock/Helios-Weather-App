import axios from 'axios';
import unitConverter from './unitConversion';

axios.defaults.baseURL = 'http://api.openweathermap.org/data/2.5/';
const key = process.env.API_KEY;

export default class {
  constructor() {
    this.current = `weather?appid=${key}`;
    this.forecast = `forecast?appid=${key}`;
  }
  async currentWeather(city) {
    const url = `${this.current}&q=${city},us`;
    try {
      const { data } = await axios.get(url);
      const icon = `wi wi-owm-${data.weather[0].id}`;
      const _data = {
        humidity: data.main.humidity,
        name: data.name,
        icon,
        pressure: unitConverter.toInchesHG(data.main.pressure),
        sunrise: unitConverter.toGMT(data.sys.sunrise),
        sunset: unitConverter.toGMT(data.sys.sunset),
        temp: unitConverter.toFahrenheit(data.main.temp),
        windDir: unitConverter.toCardinal(data.wind.deg),
        windSpd: unitConverter.toMPH(data.wind.speed),
      };
      return _data;
    } catch (e) { console.error(e); } // eslint-disable-line
  }
  async hourlyForecast(city) {
    const url = `${this.forecast}&q=${city},us`;
    try {
      const { data } = await axios.get(url);
      const _data = data.list.slice(0, 4).map(item => ({
        icon: `wi wi-own-${item.weather[0].id}`,
        time: unitConverter.toGMT(item.dt),
        temp: unitConverter.toFahrenheit(item.main.temp),
        windDir: unitConverter.toCardinal(item.wind.deg),
        windSpd: unitConverter.toMPH(item.wind.speed),
      }));
      return _data;
    } catch (e) { console.error(e); } // eslint-disable-line
  }
}

import {
  fetchCurrentWeather,
  fetchHourlyForecast,
  fetchWeatherError,
  FETCH_CURRENT,
  FETCH_ERROR,
  FETCH_FORECAST
  ,
} from '../modules';

describe('Weather Module', () => {
  describe('Weather Async Actions', () => {
    const data = {};
    test('yields FETCH_CURRENT when fetching from API has finished', () => {
      const actual = fetchCurrentWeather(data);
      const expected = { type: FETCH_CURRENT, data };
      expect(actual).toEqual(expected);
    });
    test('yields FETCH_FORECAST when fetching from API has finished', () => {
      const actual = fetchHourlyForecast(data);
      const expected = { type: FETCH_FORECAST, data };
      expect(actual).toEqual(expected);
    });
    test('yields FETCH_ERROR when fetching from API has fails', () => {
      const actual = fetchWeatherError();
      const expected = { type: FETCH_ERROR };
      expect(actual).toEqual(expected);
    });
  });
});

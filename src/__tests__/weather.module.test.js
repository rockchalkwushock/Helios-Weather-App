import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  fetchCurrent,
  fetchError,
  fetchForecast,
  FETCH_CURRENT,
  FETCH_ERROR,
  FETCH_FORECAST,
  getCurrentWeather,
  getHourlyForecast,
  initialState,
  weatherReducer as reducer,
} from '../modules';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const city = 'Wichita';
const message = 'Oops! Seems to be an issue right now, try back later.';

describe('Weather Module', () => {
  describe('Reducer', () => {
    let state;
    test('has a default state', () => {
      const actual = reducer(state = initialState, { type: 'unexpected' });
      const expected = initialState;
      expect(actual).toEqual(expected);
      expect(actual.current).toEqual(expected.current);
      expect(actual.error).toEqual(expected.error);
      expect(actual.hourly).toEqual(expected.hourly);
      expect(actual.isFetched).toEqual(expected.isFetched);
    });
    test('FETCH_CURRENT: returns the expected state object', () => {
      const actual = reducer(state = initialState, { type: FETCH_CURRENT, payload: {} });
      const expected = { ...state, current: {}, isFetched: true };
      expect(actual).toEqual(expected);
      expect(actual.current).toEqual(expected.current);
      expect(actual.error).toEqual(expected.error);
      expect(actual.hourly).toEqual(expected.hourly);
      expect(actual.isFetched).toEqual(expected.isFetched);
    });
    test('FETCH_ERROR: returns the expected state object', () => {
      const actual = reducer(state = initialState, { type: FETCH_ERROR });
      const expected = { ...state, error: true, isFetched: true };
      expect(actual).toEqual(expected);
      expect(actual.current).toEqual(expected.current);
      expect(actual.error).toEqual(expected.error);
      expect(actual.hourly).toEqual(expected.hourly);
      expect(actual.isFetched).toEqual(expected.isFetched);
    });
    test('FETCH_FORECAST: returns the expected state object', () => {
      const actual = reducer(state = initialState, { type: FETCH_FORECAST, payload: {} });
      const expected = { ...state, hourly: {}, isFetched: true };
      expect(actual).toEqual(expected);
      expect(actual.current).toEqual(expected.current);
      expect(actual.error).toEqual(expected.error);
      expect(actual.hourly).toEqual(expected.hourly);
      expect(actual.isFetched).toEqual(expected.isFetched);
    });
  });
  describe('Actions', () => {
    const data = {};
    test('fetchCurrent: yields FETCH_CURRENT on successful API call', () => {
      const actual = fetchCurrent(data);
      const expected = { type: FETCH_CURRENT, payload: data };
      expect(actual).toEqual(expected);
    });
    test('fetchError: yields FETCH_ERROR on successful API call', () => {
      const actual = fetchError();
      const expected = { type: FETCH_ERROR };
      expect(actual).toEqual(expected);
    });
    test('fetchForecast: yields FETCH_FORECAST on successful API call', () => {
      const actual = fetchForecast(data);
      const expected = { type: FETCH_FORECAST, payload: data };
      expect(actual).toEqual(expected);
    });
  });
  describe('Async Action Creators', () => {
    let store;
    beforeEach(() => {
      store = mockStore();
    });
    test('getCurrentWeather: yields type FETCH_CURRENT from API response on success', () => (
      store.dispatch(getCurrentWeather({ input: city }))
        .then(() => {
          const actions = store.getActions();
          const actual = actions[0];
          const expected = { type: FETCH_CURRENT };
          expect(actual.type).toEqual(expected.type);
        })
    ));
    test('getCurrentWeather: verify payload', () => (
      store.dispatch(getCurrentWeather({ input: city }))
        .then(() => {
          const actions = store.getActions();
          const actual = actions[0].payload;
          // Using a constant value to test expected value at that key.
          const expected = { type: FETCH_CURRENT, payload: { city_name: 'Wichita' } };
          expect(actual.city_name).toEqual(expected.payload.city_name);
          expect(actual).toHaveProperty('country_code');
          expect(actual).toHaveProperty('dewpt');
          expect(actual).toHaveProperty('precip');
          expect(actual).toHaveProperty('pres');
          expect(actual).toHaveProperty('rh');
          expect(actual).toHaveProperty('state_code');
          expect(actual).toHaveProperty('sunrise');
          expect(actual).toHaveProperty('sunset');
          expect(actual).toHaveProperty('temp');
          expect(actual).toHaveProperty('uv');
          expect(actual).toHaveProperty('weather');
          expect(actual.weather).toHaveProperty('icon');
          expect(actual.weather).toHaveProperty('code');
          expect(actual.weather).toHaveProperty('description');
          expect(actual).toHaveProperty('wind_cdir');
          expect(actual).toHaveProperty('wind_spd');
        })
    ));
    test('getCurrentWeather: yields type FETCH_ERROR & error message in payload from API response on failure', () => (
      store.dispatch(getCurrentWeather({ undefined }))
        .then(() => {
          const actions = store.getActions();
          const actual = actions[0];
          const expected = { type: FETCH_ERROR, payload: { message } };
          expect(actual.type).toEqual(expected.type);
          expect(actual.payload).toEqual(expected.payload);
        })
    ));
    test('getHourlyForecast: yields type FETCH_FORECAST from API response on success', () => (
      store.dispatch(getHourlyForecast({ input: city }))
        .then(() => {
          const actions = store.getActions();
          const actual = actions[0];
          // Not checking for payload in expected
          // because of sheer size & the fact I cannot
          // manually create a payload that will be true
          // 100% of the time since the data is always changing.
          const expected = { type: FETCH_FORECAST };
          expect(actual.type).toEqual(expected.type);
        })
    ));
    test('getHourlyForecast: verify payload', () => (
      store.dispatch(getHourlyForecast({ input: city }))
        .then(() => {
          const actions = store.getActions();
          const actual = actions[0].payload;
          expect(actual).toHaveLength(8); // this is for 1 day ONLY!!!
          expect(actual[0]).toHaveProperty('wind_cdir');
          expect(actual[0]).toHaveProperty('wind_spd');
          expect(actual[0]).toHaveProperty('weather');
          expect(actual[0].weather).toHaveProperty('icon');
          expect(actual[0].weather).toHaveProperty('code');
          expect(actual[0].weather).toHaveProperty('description');
          expect(actual[0]).toHaveProperty('precip');
          expect(actual[0]).toHaveProperty('datetime');
          expect(actual[0]).toHaveProperty('temp');
        })
    ));
    test('getHourlyForecast: yields type FETCH_ERROR & error message in payload from API response on failure', () => (
      store.dispatch(getHourlyForecast({ undefined }))
        .then(() => {
          const actions = store.getActions();
          const actual = actions[0];
          const expected = { type: FETCH_ERROR, payload: { message } };
          expect(actual.type).toEqual(expected.type);
          expect(actual.payload).toEqual(expected.payload);
        })
    ));
  });
});

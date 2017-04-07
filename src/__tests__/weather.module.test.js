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
    // TODO: Update payload key with expected data
    test('getCurrentWeather: yields type FETCH_CURRENT from API response on success', () => (
      store.dispatch(getCurrentWeather({ input: city }))
        .then(() => {
          const actions = store.getActions();
          const actual = actions[0];
          const expected = { type: FETCH_CURRENT };
          expect(actual.type).toEqual(expected.type);
        })
    ));
    test('getHourlyForecast: yields type FETCH_FORECAST from API response on success', () => (
      // TODO: Update payload key with expected data
      store.dispatch(getHourlyForecast({ input: city }))
        .then(() => {
          const actions = store.getActions();
          const actual = actions[0];
          const expected = { type: FETCH_FORECAST };
          expect(actual.type).toEqual(expected.type);
        })
    ));
  });
});

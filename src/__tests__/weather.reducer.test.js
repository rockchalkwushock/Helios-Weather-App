import {
  FETCH_CURRENT,
  FETCH_ERROR,
  FETCH_FORECAST,
  initialState,
  weatherReducer,
} from '../modules';

describe('Weather Module', () => {
  describe('Weather Reducer', () => {
    test('has default state', () => {
      const actual = weatherReducer(initialState, { type: 'unexpected' });
      const expected = { current: null, error: false, hourly: null, isFetched: false };
      expect(actual).toEqual(expected);
    });
    test('FETCH_CURRENT: returns expected state', () => {
      const actual = weatherReducer(initialState, { type: FETCH_CURRENT, data: {} });
      const expected = { current: {}, error: false, hourly: null, isFetched: true };
      expect(actual).toEqual(expected);
    });
    test('FETCH_FORECAST: returns expected state', () => {
      const actual = weatherReducer(initialState, { type: FETCH_FORECAST, data: {} });
      const expected = { current: null, error: false, hourly: {}, isFetched: true };
      expect(actual).toEqual(expected);
    });
    test('FETCH_ERROR: returns expected state', () => {
      const actual = weatherReducer(initialState, { type: FETCH_ERROR });
      const expected = { current: null, error: true, hourly: null, isFetched: true };
      expect(actual).toEqual(expected);
    });
  });
});

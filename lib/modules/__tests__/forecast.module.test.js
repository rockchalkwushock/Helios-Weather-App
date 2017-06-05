import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  fetchError,
  fetchForecast,
  forecastReducer as reducer,
  getHourlyForecast,
  initialState,
  FETCH_ERROR,
  FETCH_FORECAST
} from '../weather'

/**
 * Create middlewares & mockStore
 * for async action creator tests.
 */
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Forecast Module', () => {
  let actual
  let expected
  describe('Reducer', () => {
    let state
    test('should yield default state value.', () => {
      expect.assertions(4)
      actual = reducer((state = initialState), { type: 'unexpected' })
      expected = initialState
      expect(actual).toMatchObject(expected)
      expect(actual).toHaveProperty('data', null)
      expect(actual).toHaveProperty('error', false)
      expect(actual).toHaveProperty('isFetched', false)
    })
    test('should return expected state for FETCH_ERROR', () => {
      expect.assertions(4)
      actual = reducer((state = initialState), { type: FETCH_ERROR })
      expected = { ...state, error: true, isFetched: true }
      expect(actual).toMatchObject(expected)
      expect(actual).toHaveProperty('data', null)
      expect(actual).toHaveProperty('error', true)
      expect(actual).toHaveProperty('isFetched', true)
    })
    test('should return expected state for FETCH_FORECAST', () => {
      expect.assertions(4)
      actual = reducer((state = initialState), {
        type: FETCH_FORECAST,
        payload: {}
      })
      expected = { ...state, data: {}, isFetched: true }
      expect(actual).toMatchObject(expected)
      expect(actual).toHaveProperty('data', {})
      expect(actual).toHaveProperty('error', false)
      expect(actual).toHaveProperty('isFetched', true)
    })
  })
  describe('Actions', () => {
    const data = {}
    test('should yield FETCH_ERROR', () => {
      actual = fetchError(data)
      expected = { type: FETCH_ERROR, payload: data }
      expect.assertions(3)
      expect(actual).toMatchObject(expected)
      expect(actual).toHaveProperty('type', FETCH_ERROR)
      expect(actual).toHaveProperty('payload', data)
    })
    test('should yield FETCH_FORECAST & payload', () => {
      actual = fetchForecast(data)
      expected = { type: FETCH_FORECAST, payload: data }
      expect.assertions(3)
      expect(actual).toMatchObject(expected)
      expect(actual).toHaveProperty('type', FETCH_FORECAST)
      expect(actual).toHaveProperty('payload', data)
    })
  })
  describe('Async Action Creators', () => {
    let store
    const city = 'Wichita'
    const message = {
      message: 'Oops! Seems to be an issue right now, try back later.'
    }
    beforeEach(() => {
      store = mockStore()
    })
    test('getHourlyForecast() should yield expected type & payload on success', async () => {
      try {
        actual = await store.dispatch(getHourlyForecast({ input: city }))
        expect.assertions(3)
        expect(actual).toHaveProperty('type', FETCH_FORECAST)
        expect(actual).toHaveProperty('payload') // NOTE: cannot add value since it's dynamic data!
        expect(actual.payload).toHaveLength(8) // NOTE: this is for ONLY one day of data.
      } catch (e) {
        throw e
      }
    })
    test('getHourlyForecast() should yield expected type & payload on failure', async () => {
      try {
        actual = await store.dispatch(getHourlyForecast({ undefined }))
        expect.assertions(2)
        expect(actual).toHaveProperty('type', FETCH_ERROR)
        expect(actual).toHaveProperty('payload', message)
      } catch (e) {
        throw e
      }
    })
  })
})

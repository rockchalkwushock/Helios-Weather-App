import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  currentReducer as reducer,
  fetchCurrent,
  fetchError,
  FETCH_CURRENT,
  FETCH_ERROR,
  getCurrentWeather,
  initialState
} from '../weather'

/**
 * Create middlewares & mockStore
 * for async action creator tests.
 */
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Current Weather Module', () => {
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
    test('should return expected state for FETCH_CURRENT.', () => {
      expect.assertions(4)
      actual = reducer((state = initialState), {
        type: FETCH_CURRENT,
        payload: {}
      })
      expected = { ...state, data: {}, isFetched: true }
      expect(actual).toMatchObject(expected)
      expect(actual).toHaveProperty('data', {})
      expect(actual).toHaveProperty('error', false)
      expect(actual).toHaveProperty('isFetched', true)
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
  })
  describe('Actions', () => {
    const data = {}
    test('should yield FETCH_CURRENT & payload', () => {
      actual = fetchCurrent(data)
      expected = { type: FETCH_CURRENT, payload: data }
      expect.assertions(3)
      expect(actual).toMatchObject(expected)
      expect(actual).toHaveProperty('type', FETCH_CURRENT)
      expect(actual).toHaveProperty('payload', data)
    })
    test('should yield FETCH_ERROR', () => {
      actual = fetchError(data)
      expected = { type: FETCH_ERROR, payload: data }
      expect.assertions(3)
      expect(actual).toMatchObject(expected)
      expect(actual).toHaveProperty('type', FETCH_ERROR)
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
    test('getCurrentWeather() should yield expected type & payload on success', async () => {
      try {
        actual = await store.dispatch(getCurrentWeather({ input: city }))
        expect.assertions(2)
        expect(actual).toHaveProperty('type', FETCH_CURRENT)
        expect(actual.payload).toHaveProperty('city_name', 'Wichita') // NOTE: cannot add value since it's dynamic data!
      } catch (e) {
        throw e
      }
    })
    test('getCurrentWeather() should yield expected type & payload on failure', async () => {
      try {
        actual = await store.dispatch(getCurrentWeather({ undefined }))
        expect.assertions(2)
        expect(actual).toHaveProperty('type', FETCH_ERROR)
        expect(actual).toHaveProperty('payload', message)
      } catch (e) {
        throw e
      }
    })
  })
})

import { initialState, weatherReducer as reducer } from '../weather'

describe('Weather Module', () => {
  describe.only('Reducer', () => {
    let state // eslint-disable-line
    test('should yield default state value', () => {
      const actual = reducer((state = initialState), { type: 'unexpected' })
      const expected = initialState
      expect(actual).toEqual(expected)
    })
  })
})

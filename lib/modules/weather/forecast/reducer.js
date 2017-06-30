import { FETCH_ERROR, FETCH_FORECAST, initialState } from '../constants'

/**
 * @public
 * @function forecastReducer
 *
 * @param {Object} state
 * @param {Object} action { payload, type }
 * @returns {Object} state
 */
export default (state = initialState, { payload, type }) => {
  switch (type) {
    case FETCH_FORECAST:
      return {
        ...state,
        data: payload,
        isFetched: true
      }
    case FETCH_ERROR:
      return {
        ...state,
        error: true,
        isFetched: true
      }
    default:
      return state
  }
}

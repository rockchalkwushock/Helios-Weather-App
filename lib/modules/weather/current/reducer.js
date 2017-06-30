import { FETCH_CURRENT, FETCH_ERROR, initialState } from '../constants'

/**
 * @public
 * @function currentReducer
 *
 * @param {Object} state
 * @param {Object} action { payload, type }
 * @returns {Object} state
 */
export default (state = initialState, { payload, type }) => {
  switch (type) {
    case FETCH_CURRENT:
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

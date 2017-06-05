const FETCH_CURRENT = 'FETCH_CURRENT'
const FETCH_ERROR = 'FETCH_ERROR'
const FETCH_FORECAST = 'FETCH_FORECAST'

/**
 * initialState object for both reducers.
 */
const initialState = {
  data: null,
  error: false,
  isFetched: false
}

/**
 * @public
 * @function fetchError
 *
 * @param {Object} data
 * @returns {Object} Action
 */
const fetchError = data => ({
  type: FETCH_ERROR,
  payload: data
})

export { fetchError, FETCH_CURRENT, FETCH_ERROR, FETCH_FORECAST, initialState }

import {
  FETCH_CURRENT,
  FETCH_ERROR,
  FETCH_FORECAST,
} from './types';

export const initialState = {
  current: null,
  error: false,
  hourly: null,
  isFetched: false,
};

/**
 * weatherReducer(arg, arg2)
 *
 * @param {Object} state
 * @param {Object} action
 * @returns {Object} state
 */
export default (state = initialState, { payload, type }) => {
  switch (type) {
    case FETCH_CURRENT:
      return {
        ...state,
        current: payload,
        isFetched: true,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: true,
        isFetched: true,
      };
    case FETCH_FORECAST:
      return {
        ...state,
        hourly: payload,
        isFetched: true,
      };
    default: return state;
  }
};

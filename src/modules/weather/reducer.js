import { FETCH_CURRENT, FETCH_ERROR, FETCH_FORECAST } from './types';

export const initialState = {
  current: null,
  error: false,
  hourly: null,
  isFetched: false,
};

export default (state = initialState, action) => {
  const { data, type } = action;
  switch (type) {
    case FETCH_CURRENT:
      return {
        ...state,
        current: data,
        isFetched: true,
      };
    case FETCH_FORECAST:
      return {
        ...state,
        hourly: data,
        isFetched: true,
      };
    case FETCH_ERROR:
      return {
        ...state,
        isFetched: true,
        error: true,
      };
    default: return state;
  }
};

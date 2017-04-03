import { FETCH_CURRENT, FETCH_FORECAST } from './types';

export default (state = {}, action) => {
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
    case `${FETCH_CURRENT}_ERROR`:
    case `${FETCH_FORECAST}_ERROR`:
      return {
        ...state,
        isFetched: false,
        err: data,
      };
    default: return state;
  }
};

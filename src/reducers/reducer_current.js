import { FETCH_CURRENT_WEATHER } from '../actions/types';

const initialState = {
    code: null,
    err: null,
    isFetched: false,
    weatherData: {}
};

/*
NOTE:
Processes the FETCH_CURRENT_WEATHER Action. Checking Pending, Fulfilled, & Rejected states.
Returns an new state object with required data.
In the case of Fulfilled returns payload converted to imperial standards.
The action is received as a promise from the action creator.
*/

export default(state = initialState, action) => {
  const data = action.payload;
    switch (action.type) {
        case `${FETCH_CURRENT_WEATHER}_PENDING`:
            return {};
        case `${FETCH_CURRENT_WEATHER}_FULFILLED`:
            return {
                ...state,
                weatherData: data,
                isFetched: true
            };
        case `${FETCH_CURRENT_WEATHER}_REJECTED`:
            return {
                ...state,
                isFetched: true,
                err: data
            };
        default:
            return state;
    }
};

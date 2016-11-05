import { FETCH_BACKGROUND } from '../actions/ActionTypes';

const initialState = {
    img: null,
    isFetched: false,
    err: null,
};

/*
NOTE:
Processes the FETCH_BACKGROUND Action. Checking the time of day and weather condition
to render the appropriate background.
Sunrise & Sunset are received through the api call.
Current time of day is received through new Date().
The newBackground object is created through the background module.
The action is received as a promise from the action creator.
*/

export default(state = initialState, action) => {
  const data = action.payload;
    switch (action.type) {
        case `${FETCH_BACKGROUND}_PENDING`:
            return {};
        case `${FETCH_BACKGROUND}_FULFILLED`:
            return {
                ...state,
                img: data,
                isFetched: true
            };
        case `${FETCH_BACKGROUND}_REJECTED`:
            return {
                ...state,
                isFetched: true,
                err: data
            };
        default:
            return state;
    }
};

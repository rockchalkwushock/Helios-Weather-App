import { FETCH_CURRENT_WEATHER } from '../actions/actions';
import { weatherIcons } from '../conversions/weatherIcons';

const initialState = {
    code: null,
    isFetched: false,
    err: null,
};

/*
NOTE:
Processes FETCH_CW_ICON and returns proper image for rendering.
The action is received as a promise from the action creator.
*/

export default(state = initialState, action) => {
  const data = action.payload;
    switch (action.type) {
        case `${FETCH_CURRENT_WEATHER}_PENDING`:
            return {};
        case `${FETCH_CURRENT_WEATHER}_FULFILLED`:
        const prefix = 'wi wi-owm-';
        const code = data.weather[0].id;
        let icon = prefix + code;
            return {
                ...state,
                icon,
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

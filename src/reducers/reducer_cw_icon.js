import { FETCH_CW_ICON } from '../actions/actions';
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
        case `${FETCH_CW_ICON}_PENDING`:
            return {};
        case `${FETCH_CW_ICON}_FULFILLED`:
        const prefix = 'wi-owm-';
        const code = data;
        let icon = weatherIcons.codeToIcon(code);
        icon = prefix + icon;
            return {
                ...state,
                icon,
                isFetched: true
            };
        case `${FETCH_CW_ICON}_REJECTED`:
            return {
                ...state,
                isFetched: true,
                err: data
            };
        default:
            return state;
    }
};

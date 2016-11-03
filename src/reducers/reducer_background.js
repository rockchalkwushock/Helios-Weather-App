import { FETCH_BACKGROUND } from '../actions/actions';
import { changeAppBackground } from '../local_modules/background';
import { weatherConditionCheck } from '../local_modules/conditions';

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
            const sunrise = data.sys.sunrise;
            const sunset = data.sys.sunset;
            const code = data.weather[0].id;
            const condition = weatherConditionCheck.codeToIdentifier(code);
            const time = changeAppBackground.getTime();
            const sunup = changeAppBackground.convertSunrise(sunrise);
            const sundown = changeAppBackground.convertSunset(sunset);
            const id = changeAppBackground.getIdentifier(time, sunup, sundown);
            const image = changeAppBackground.setBackground(id, condition);
            return {
                ...state,
                image,
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

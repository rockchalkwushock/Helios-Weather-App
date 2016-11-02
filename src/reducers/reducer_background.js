import { FETCH_CURRENT_WEATHER } from '../actions/actions';
import { changeAppBackground } from '../conversions/background';
import { weatherConditionCheck } from '../conversions/conditions';

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
        case `${FETCH_CURRENT_WEATHER}_PENDING`:
            return {};
        case `${FETCH_CURRENT_WEATHER}_FULFILLED`:
            const sunrise = data.sys.sunrise;
            console.log(sunrise);
            const sunset = data.sys.sunset;
            console.log(sunset);
            const code = data.weather[0].id;
            console.log(code);
            const condition = weatherConditionCheck.codeToIdentifier(code);
            console.log(condition);
            const time = changeAppBackground.getTime();
            console.log(time);
            const sunup = changeAppBackground.convertSunrise(sunrise);
            console.log(sunup);
            const sundown = changeAppBackground.convertSunset(sunset);
            console.log(sundown);
            const id = changeAppBackground.getIdentifier(time, sunup, sundown);
            console.log(id);
            const image = changeAppBackground.setBackground(id, condition);
            console.log(image);
            return {
                ...state,
                image,
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

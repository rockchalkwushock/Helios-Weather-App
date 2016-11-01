import { FETCH_CURRENT_WEATHER } from '../actions/actions';
import { Background } from '../additions/background';
import { IMG_LIBRARY } from '../additions/IMG_LIBRARY';

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
            const sunset = data.sys.sunset;
            const newBackground = new Background(IMG_LIBRARY);
            // console.log(newBackground);
            const hour = newBackground.getTime();
            // console.log('Current Hour: ' + hour);
            const sunup = newBackground.convertSunrise(sunrise);
            // console.log('Sunup: ' + sunup);
            const sundown = newBackground.convertSunset(sunset);
            // console.log('Sundown: ' + sundown);
            const id = newBackground.getIdentifier(hour, sunup, sundown);
            // console.log('Identifier: ' + id);
            const image = newBackground.selectBackground(id);
            // console.log(image);
            return {
                ...state,
                img: image,
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

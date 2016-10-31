import { CURRENT_WEATHER } from '../actions/actions';
import { unitConverter } from '../conversions/conversions_2.0';

const initialState = {
    weatherData: {},
    isFetched: false,
    err: null,
    term: ''
};

/*
NOTE:
Processes the CURRENT_WEATHER Action. Checking Pending, Fulfilled, & Rejected states.
Returns an new state object with required data.
In the case of Fulfilled returns payload converted to imperial standards.
The action is received as a promise from the action creator.
*/

export default(state = initialState, action) => {
  console.log(action.payload, action.type);
    switch (action.type) {
        case `${CURRENT_WEATHER}_PENDING`:
            return {};
        case `${CURRENT_WEATHER}_FULFILLED`:
            return {
                ...state,
                weatherData: {
                  humidity: action.payload.main.humidity,
                  pressure: unitConverter.toInchesHG(action.payload.main.pressure),
                  sunrise: unitConverter.toGMT(action.payload.sys.sunrise),
                  sunset: unitConverter.toGMT(action.payload.sys.sunset),
                  temp: unitConverter.toFarenheit(action.payload.main.temp),
                  winddir: unitConverter.toCardinal(action.payload.wind.deg),
                  windspd: unitConverter.toMPH(action.payload.wind.speed)
                },
                term: '',
                isFetched: true
            };
        case `${CURRENT_WEATHER}_REJECTED`:
            return {
                ...state,
                isFetched: true,
                term: '',
                err: action.payload
            };
        default:
            return state;
    }
};

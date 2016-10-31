import { CURRENT_WEATHER } from '../actions/actions';
import { unitConverter } from '../conversions/conversions_2.0';

const initialState = {
    weatherData: {},
    isFetched: false,
    err: null,
};

/*
NOTE:
Processes the CURRENT_WEATHER Action. Checking Pending, Fulfilled, & Rejected states.
Returns an new state object with required data.
In the case of Fulfilled returns payload converted to imperial standards.
The action is received as a promise from the action creator.
*/

export default(state = initialState, action) => {
  const data = action.payload;
    switch (action.type) {
        case `${CURRENT_WEATHER}_PENDING`:
            return {};
        case `${CURRENT_WEATHER}_FULFILLED`:
            return {
                ...state,
                weatherData: {
                  humidity: data.main.humidity,
                  pressure: unitConverter.toInchesHG(data.main.pressure),
                  name: data.name,
                  sunrise: unitConverter.toGMT(data.sys.sunrise),
                  sunset: unitConverter.toGMT(data.sys.sunset),
                  temp: unitConverter.toFarenheit(data.main.temp),
                  winddir: unitConverter.toCardinal(data.wind.deg),
                  windspd: unitConverter.toMPH(data.wind.speed)
                },
                isFetched: true
            };
        case `${CURRENT_WEATHER}_REJECTED`:
            return {
                ...state,
                isFetched: true,
                err: data
            };
        default:
            return state;
    }
};

import { FETCH_CURRENT_WEATHER } from '../actions/actions';
import { unitConverter } from '../conversions/conversions_2.0';

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
        const prefix = 'wi wi-owm-';
        const code = data.weather[0].id;
        const deg = data.wind.deg;
        const icon = prefix + code;
        const windicon = 'wi wi-wind from-' + deg + '-deg';
            return {
                ...state,
                weatherData: {
                  humidity: data.main.humidity,
                  icon,
                  name: data.name,
                  pressure: unitConverter.toInchesHG(data.main.pressure),
                  sunrise: unitConverter.toGMT(data.sys.sunrise),
                  sunset: unitConverter.toGMT(data.sys.sunset),
                  temp: unitConverter.toFarenheit(data.main.temp),
                  winddir: unitConverter.toCardinal(data.wind.deg),
                  windicon,
                  windspd: unitConverter.toMPH(data.wind.speed)
                },
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

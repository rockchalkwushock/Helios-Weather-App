import { CURRENT_WEATHER } from '../actions/actions';
import { unitConverter } from '../conversions/conversions_2.0';

const initialState = {
    weatherData: {}, // will be sent to component as converted data from api.
    isFetched: false,
    err: null
};
// action will come in as a promise from the corresponding action creator.
export default(state = initialState, action) => {
  console.log(action.payload);
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
                isFetched: true
            };
        case `${CURRENT_WEATHER}_REJECTED`:
            return {
                ...state,
                isFetched: true,
                err: action.payload
            };
        default:
            return state;
    }
};

import { FETCH_FORECAST } from '../actions/actions';
import { unitConverter } from '../conversions/conversions_2.0';

const initialState = {
    forecast: [], // will be sent to component as converted data from api.
    isFetched: false,
    err: null
};
// action will come in as a promise from the corresponding action creator.
export default(state = initialState, action) => {
    switch (action.type) {
        case `${FETCH_FORECAST}_PENDING`:
            return {};
        case `${FETCH_FORECAST}_FULFILLED`:
            const convertedData = action.payload.list.slice(0,5).map(data => {
          return({
            time: unitConverter.toGMT(data.dt),
            temp: unitConverter.toFarenheit(data.main.temp),
            windspd: unitConverter.toMPH(data.wind.speed),
            winddir: unitConverter.toCardinal(data.wind.deg)
          });
        });
            return {
                ...state,
                forecast: convertedData,
                isFetched: true
            };
        case `${FETCH_FORECAST}_REJECTED`:
            return {
                ...state,
                isFetched: true,
                err: action.payload
            };
        default:
            return state;
    }
};

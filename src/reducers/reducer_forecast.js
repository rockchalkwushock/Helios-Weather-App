import { FETCH_FORECAST } from '../actions/actions';
import { unitConverter } from '../conversions/conversions_2.0';

const initialState = {
    forecast: [],
    isFetched: false,
    err: null
};

/*
NOTE:
Processes the FETCH_FORECAST Action. Checking Pending, Fulfilled, & Rejected states.
Returns an new state object with required data.
In the case of Fulfilled returns a payload of 5 objects converted to imperial standards.
The action is received as a promise from the action creator.
*/

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

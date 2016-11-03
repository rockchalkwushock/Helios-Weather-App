import { FETCH_FORECAST } from '../actions/actions';
import { unitConverter } from '../conversions/conversions_2.0';

const initialState = {
    err: null,
    hourlyforecast: [],
    isFetched: false,  
};

/*
NOTE:
Processes the FETCH_FORECAST Action. Checking Pending, Fulfilled, & Rejected states.
Returns an new state object with required data.
In the case of Fulfilled returns a payload of 5 objects converted to imperial standards.
The action is received as a promise from the action creator.
*/

export default(state = initialState, action) => {
  const data = action.payload;
    switch (action.type) {
        case `${FETCH_FORECAST}_PENDING`:
            return {};
        case `${FETCH_FORECAST}_FULFILLED`:
            const convertedData = data.list.slice(0,5).map(item => {
              let code = item.weather[0].id;
              let deg = parseInt(item.wind.deg);
              let icon = 'wi wi-owm-' + code;
              let windicon = 'wi wi-wind from-' + deg + '-deg';
          return({
            icon,
            time: unitConverter.toGMT(item.dt),
            temp: unitConverter.toFarenheit(item.main.temp),
            winddir: unitConverter.toCardinal(item.wind.deg),
            windicon,
            windspd: unitConverter.toMPH(item.wind.speed)
          });
        });
            return {
                ...state,
                hourlyforecast: convertedData,
                isFetched: true
            };
        case `${FETCH_FORECAST}_REJECTED`:
            return {
                ...state,
                isFetched: true,
                err: data
            };
        default:
            return state;
    }
};

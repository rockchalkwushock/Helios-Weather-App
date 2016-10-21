import { CURRENT_WEATHER } from '../actions/actions';

export default (state = [], action) => {
  // console.log('Current Weather Action Received: ', action);
  switch (action.type) {
    case CURRENT_WEATHER:
          // returning new instance.
          // return state.concat([ action.payload.data ]);
          return [ action.payload.data, ...state ]; //ES6 method (newest record first)
  }
  return state;
};

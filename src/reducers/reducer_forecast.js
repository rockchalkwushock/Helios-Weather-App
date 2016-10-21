import { FETCH_FORECAST } from '../actions/actions';

export default (state = [], action) => {
  console.log('Action Received: ', action);
  switch (action.type) {
    case FETCH_FORECAST:
          // returning new instance.
          // return state.concat([ action.payload.data ]);
          return [ action.payload.data, ...state ]; //ES6 method (newest record first)
  }
  return state;
};

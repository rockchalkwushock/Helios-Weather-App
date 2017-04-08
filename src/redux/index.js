import { applyMiddleware, createStore, compose } from 'redux/es';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk/es';
import rootReducer from './reducers';

const middlewares = [thunk];
let enhancers;

if (process.env.NODE_ENV !== 'production') {
  enhancers = composeWithDevTools(applyMiddleware(...middlewares));
} else {
  enhancers = compose(applyMiddleware(...middlewares));
}

const store = createStore(rootReducer, undefined, enhancers);

export { store };

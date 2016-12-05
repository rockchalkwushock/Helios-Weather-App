import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';

import reducers from './reducers/index';

const middleware = [
	reduxPromiseMiddleware(),
	promise,
	logger()
];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;

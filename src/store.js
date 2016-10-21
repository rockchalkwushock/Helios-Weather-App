import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers/reducer_index';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;

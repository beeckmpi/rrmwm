import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import mainReducer from './mainReducer';

const logger = createLogger();

const enhancers = [
  applyMiddleware(ReduxThunk, logger)
];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(mainReducer, composeEnhancers(...enhancers));

export default Store;

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetingReducer from './greeting';

const rootReducer = combineReducers({
  greetingData: greetingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;

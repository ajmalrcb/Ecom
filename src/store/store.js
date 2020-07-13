import reducer from '../reducer';
import { createStore, applyMiddleware,compose } from 'redux';
import logger from 'redux-logger'

export const store = createStore(reducer, compose(applyMiddleware(logger)))

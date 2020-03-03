import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../store/reducers';
import saga from '../store/saga';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];
const store = createStore(reducer, applyMiddleware(...middlewares));
sagaMiddleware.run(saga);

export default store;

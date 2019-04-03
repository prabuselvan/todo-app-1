import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import userReducer from './../Components/Login/Reducer';
import rootSagas from './Sagas';

const sagaMiddleware = createSagaMiddleware();
const rootReducers = combineReducers({
    user: userReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers,composeEnhancer(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSagas);

console.log(store.getState()); 

export default store;


import {all} from 'redux-saga/effects';
import loginSaga from './../Components/Login/Saga';

export default function* rootSagas() {
    yield all([
        loginSaga()
    ]);
}
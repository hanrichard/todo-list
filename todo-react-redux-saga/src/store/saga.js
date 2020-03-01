import { takeEvery, put, call } from 'redux-saga/effects';

import { REQUEST_API_DATA } from '../store/actions/actionTypes';

import { receiveApiData } from '../store/actions/index';

const fetchData = async () => {
    try {
        const response = await fetch('https://randomuser.me/api');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (e) {
        console.log(e);
    }
};

function* getApiData(action) {
    try {
        // do api call
        const data = yield call(fetchData);
        console.log(data);
        yield put(receiveApiData(data));
    } catch (e) {
        console.log(e);
    }
}

function* mySaga() {
    yield takeEvery(REQUEST_API_DATA, getApiData);
}

export default mySaga;

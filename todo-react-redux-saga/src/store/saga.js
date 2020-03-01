import { takeEvery, put, call } from 'redux-saga/effects';

import { REQUEST_API_DATA } from '../store/actions/actionTypes';

import { receiveApiData } from '../store/actions/index';

const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        console.log(data.slice(0, 10));
        return data.slice(0, 10);
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

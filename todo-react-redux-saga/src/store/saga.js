import { takeEvery, put } from 'redux-saga/effects';

import { SAGA_ACTION } from '../store/actions/actionTypes';

function* getInitListData() {
    try {
        const action = setTimeout(() => {
            console.log('this is saga');
        }, 1000);
        yield put(action);
    } catch (error) {
        console.log('error: ', error);
    }
}

function* mySaga() {
    console.log('saga');
    // yield put(getInitListData);
    yield takeEvery(SAGA_ACTION, getInitListData);
}

export default mySaga;

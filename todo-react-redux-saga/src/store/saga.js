import { all, fork, takeEvery, put, call } from 'redux-saga/effects';
import { REQUEST_API_DATA } from '../store/actions/actionTypes';
import { receiveApiData } from '../store/actions/index';

const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        return data.slice(0, 10);
    } catch (e) {
        console.log(e);
    }
};

function* getApiData(action) {
    try {
        const data = yield call(fetchData);
        yield put(receiveApiData(data));
    } catch (e) {
        console.log(e);
    }
}

function* mySaga() {
    yield takeEvery(REQUEST_API_DATA, getApiData);
}

export default function* rootSaga() {
    yield all([fork(mySaga)]);
}

// import * as userSaga from './user';
// import * as userAccountSaga from './userAccount';

// export default function* rootSaga() {
//     yield all([...Object.values(userSaga), ...Object.values(userAccountSaga)].map(fork));
// }

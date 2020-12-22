import { all, put } from "redux-saga/effects";
import fetchApartmentsSaga from "./fetchApartmentsSaga";

function* workerSaga(){
    console.log('hi, im worker');
    console.log('lets see');
    yield put({type:'FETCH_APARTMENTS_REQUEST'});
}

function* rootSaga() {
    yield all([
        fetchApartmentsSaga(),
    ])
}

export default rootSaga;
import { all } from "redux-saga/effects";
import fetchApartmentsSaga from "./fetchApartmentsSaga";

function* rootSaga() {
    yield all([
        fetchApartmentsSaga(),
    ])
}

export default rootSaga;
import { takeEvery, call, put } from "redux-saga/effects";
import * as Actions from "../constants/ActionTypes";
import { API_REQUEST_URL } from "../constants/APIConstants";
import  axios from "axios";
import * as ApartmentsActions from "../actions/ApartmentsActions";

function* asynchFetchApartmentsRequest(){
    try {
        const apartments = yield call(()=>
            axios
            .get(API_REQUEST_URL)
            );
        yield put(ApartmentsActions.fetchApartmentsSuccess(apartments.data))
    } catch (error) {
        yield put(ApartmentsActions.fetchApartmentsFailure(error))
        
    }
}

function* fetchApartmentsSaga() {
    yield takeEvery(Actions.FETCH_APARTMENTS_REQUEST, asynchFetchApartmentsRequest)
}

export default fetchApartmentsSaga

import  axios from "axios";
import * as Actions from "../constants/ActionTypes";
import { API_REQUEST_URL } from "../constants/APIConstants";

export const fetchApartments = () => {
    return (dispatch) => {
      dispatch(fetchApartmentsRequest())
      axios
        .get(API_REQUEST_URL)
        .then(response => {
          // response.data is the apartments
          const apartments = response.data
          dispatch(fetchApartmentsSuccess(apartments))
        })
        .catch(error => {
          // error.message is the error message
          const erroMsg = error.message;
          dispatch(fetchApartmentsFailure(erroMsg))
        })
    }
  }
  
  export const fetchApartmentsRequest = () => {
    return {
      type: Actions.FETCH_APARTMENTS_REQUEST
    }
  }
  
  export const fetchApartmentsSuccess = apartments => {
    return {
      type: Actions.FETCH_APARTMENTS_SUCCESS,
      payload: apartments
    }
  }
  
  export const fetchApartmentsFailure = error => {
    return {
      type: Actions.FETCH_APARTMENTS_FAILURE,
      payload: error
    }
  }
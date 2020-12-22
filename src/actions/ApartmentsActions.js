import * as Actions from "../constants/ActionTypes";
  
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
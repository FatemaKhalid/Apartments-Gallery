import * as Actions from "../constants/ActionTypes";

const initialState = {
    loading: false,
    apartments: [],
    error: ''
  }
  
  const ApartmentsReducer = (state = initialState, action) => {
    switch (action.type) {
      case Actions.FETCH_APARTMENTS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case Actions.FETCH_APARTMENTS_SUCCESS:{
        return {
          loading: false,
          apartments: action.payload,
          error: ''
        }}
      case Actions.FETCH_APARTMENTS_FAILURE:
        return {
          loading: false,
          apartments: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default ApartmentsReducer
  
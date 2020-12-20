import { combineReducers } from 'redux'
import ApartmentsReducer  from "./ApartmentsReducer";

const rootReducer = combineReducers({
  apartments: ApartmentsReducer
  })
  
  export default rootReducer
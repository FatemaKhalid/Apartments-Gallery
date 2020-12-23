import * as types from '../constants/ActionTypes'
import  ApartmentsReducer from "../reducers/ApartmentsReducer";

describe('Testing apartments reducer', () => {
    it('should return the initial state', () => {
      expect(ApartmentsReducer(undefined, {})).toEqual(
        {
            loading: false,
            apartments: [],
            error: ''
        }
      )
    })
  
    it('should handle FETCH_APARTMENTS_REQUEST', () => {
      expect(
        ApartmentsReducer([], {
          type: types.FETCH_APARTMENTS_REQUEST,
          payload: undefined
        })
      ).toEqual(
        {
            loading:true
        }
      )
  
      expect(
        ApartmentsReducer([],
            {
            type: types.FETCH_APARTMENTS_SUCCESS,
            payload:[{apt:'all data'}]
          }
        )
      ).toEqual(
        {
          loading: false,
          apartments: [{apt:'all data'}],
          error: ''
        }
      )
    })
  })
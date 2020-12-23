import * as actions from '../actions/ApartmentsActions'
import * as types from '../constants/ActionTypes'

describe('actions', () => {
  it('should create an action to call fetch apartments requests', () => {
    const expectedAction = {
      type: types.FETCH_APARTMENTS_REQUEST,
    }
    expect(actions.fetchApartmentsRequest()).toEqual(expectedAction)
  })

  it('should create an action to call fetch apartments Success', () => {
    const m_payload = undefined
    const expectedAction = {
      type: types.FETCH_APARTMENTS_SUCCESS,
      payload: m_payload
    }
    expect(actions.fetchApartmentsSuccess()).toEqual(expectedAction)
  })


  it('should create an action to call fetch apartments Failure', () => {
    const errorMsg = undefined
    const expectedAction = {
      type: types.FETCH_APARTMENTS_FAILURE,
      payload: errorMsg
    }
    expect(actions.fetchApartmentsFailure()).toEqual(expectedAction)
  })
})

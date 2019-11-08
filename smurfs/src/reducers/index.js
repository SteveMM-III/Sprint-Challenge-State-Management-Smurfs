import { FETCH_SMURF_LOADING, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILED } from '../actions';

export const initialState = {
  smurfs: [],
  error: null,
  isFetching: false
};

export const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case FETCH_SMURF_LOADING:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: null
      }
    case FETCH_SMURF_FAILED:
      return {
        ...state,
        smurfs: [],
        isFetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};

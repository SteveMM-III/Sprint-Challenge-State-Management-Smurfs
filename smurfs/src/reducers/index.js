import { FETCH_SMURFS_LOADING, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILED, ADD, ADD_FAILED } from '../actions';

export const initialState = {
  smurfs: [],
  error: null,
  isFetching: false
};

export const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case FETCH_SMURFS_LOADING:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: null
      }
    case FETCH_SMURFS_FAILED:
      return {
        ...state,
        smurfs: [],
        isFetching: false,
        error: action.payload
      }
    case ADD:
      return {
        ...state,
        smurfs: [ ...state.smurfs, action.payload ]
      }
    case ADD_FAILED:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};

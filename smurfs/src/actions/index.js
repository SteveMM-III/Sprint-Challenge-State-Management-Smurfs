import axios from 'axios';

export const FETCH_SMURF_LOADING = 'FETCH_SMURF_LOADING';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILED  = 'FETCH_SMURF_FAILED';

export const smurfLoading = () => ( { type: FETCH_SMURF_LOADING } );

export const smurfLoadSuccess = data => ( {
  type: FETCH_SMURF_SUCCESS,
  payload: data
} );

export const smurfLoadFailure = error => ( {
  type: FETCH_SMURF_FAILED,
  payload: error
} );

export function fetchSmurf() {
  return function( dispatch ) {
    dispatch( smurfLoading() );

    return axios
      .get( 'http://localhost:3333' )
      .then( res => console.log( res ) )
      /* .then( res => dispatch( smurfLoadSuccess( res.data ) ) ) */
      .catch( error => dispatch( smurfLoadFailure( error ) ) );
  }
}

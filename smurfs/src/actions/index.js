import axios from 'axios';

export const FETCH_SMURFS_LOADING = 'FETCH_SMURFS_LOADING';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILED  = 'FETCH_SMURFS_FAILED';

export const smurfsLoading = () => ( { type: FETCH_SMURFS_LOADING } );

export const smurfsLoadSuccess = data => ( {
  type: FETCH_SMURFS_SUCCESS,
  payload: data
} );

export const smurfsLoadFailure = error => ( {
  type: FETCH_SMURFS_FAILED,
  payload: error
} );

export function fetchSmurfs() {
  return function( dispatch ) {
    dispatch( smurfsLoading() );

    return axios
      .get( 'http://localhost:3333/smurfs' )
      // .then( res => console.log( res ) )
      .then ( res   => dispatch( smurfsLoadSuccess( res.data ) ) )
      .catch( error => dispatch( smurfsLoadFailure( error    ) ) );
  }
}

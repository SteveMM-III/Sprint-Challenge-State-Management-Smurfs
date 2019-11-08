import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import uuid from 'uuid';

import Smurf from './Smurf';

const SmurfList = props => {

  const dispatch = props.dispatch;
  
  useEffect( () => { 
    async function getSmurfs() {
      await dispatch( fetchSmurfs() );
    }
    getSmurfs();
  }, [dispatch] );

  return (
    <div>
      {
        props.smurfs.map( smurf => (
          <Smurf key={ uuid.v4() } smurf={ smurf } />
        ))
      }
    </div>
  );
};

const mapDispatchToProps = {
  fetchSmurfs
};

const mapStateToProps = state => {
  return { smurfs: state.smurfs }
};

export default connect( state => state )( SmurfList );
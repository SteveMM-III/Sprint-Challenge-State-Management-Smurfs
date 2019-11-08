import React from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';

import { ADD, addSmurf } from '../actions';

class SmurfForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newSmurf: { name: '', age: 0, height: 0 }
    };
  }

  handleNameChange = e => {
    this.setState( {
      newSmurf: { ...this.state.newSmurf, name: e.target.value }
    } );
  };

  handleAgeChange = e => {
    this.setState( {
      newSmurf: { ...this.state.newSmurf, age: e.target.value }
    } );
  }

  handleHeightChange = e => {
    this.setState( {
      newSmurf: { ...this.state.newSmurf, height: e.target.value }
    } );
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch( addSmurf( { ...this.state.newSmurf, id: uuid.v4() } ) );
    this.setState(  { newSmurf: { name: '', age: 0, height: 0 } } );
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          Name
          <input
            type="text"
            name="name"
            id="name"
            value={ this.state.newSmurf.name }
            onChange={ this.handleNameChange }
          />
        </label>
        <label>
          Age
          <input
            type="number"
            name="age"
            id="age"
            value={ this.state.newSmurf.age }
            onChange={ this.handleAgeChange }
          />
        </label>
        <label>
          Height
          <input
            type="text"
            name="height"
            id="height"
            value={ this.state.newSmurf.height }
            onChange={ this.handleHeightChange }
          />
        </label>
        <button>Add</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addSmurf
};

export default connect( state => state )(SmurfForm);

import React from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addSmurf } from '../actions';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  box-shadow: 0 0 12px black;

  button {
    margin: 5px 0;
    align-self: center;
    width: 100px;
  }
`;

const StyledLabel = styled.label`
  width: 200px;
  align-self: center;
  padding: 5px;
`;


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
      <StyledForm onSubmit={ this.handleSubmit }>
        <StyledLabel>
          Name
          <input
            type="text"
            name="name"
            id="name"
            value={ this.state.newSmurf.name }
            onChange={ this.handleNameChange }
          />
        </StyledLabel>
        <StyledLabel>
          Age
          <input
            type="number"
            name="age"
            id="age"
            value={ this.state.newSmurf.age }
            onChange={ this.handleAgeChange }
          />
        </StyledLabel>
        <StyledLabel>
          Height
          <input
            type="text"
            name="height"
            id="height"
            value={ this.state.newSmurf.height }
            onChange={ this.handleHeightChange }
          />
        </StyledLabel>
        <button>Add</button>
      </StyledForm>
    );
  }
}

const mapDispatchToProps = {
  addSmurf
};

export default connect( state => state )(SmurfForm);

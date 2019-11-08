import React from 'react';
import styled from 'styled-components';

const StyledSmurf = styled.div`
  margin: 5px auto;
  box-shadow: 0 0 4px grey;
  width: 400px;
`;

const Smurf = props => {
  const smurf = props.smurf;
  return (
    <StyledSmurf>
      <p>name: { smurf.name }</p>
      <p>age: { smurf.age }</p>
      <p>height: { smurf.height }</p>
    </StyledSmurf>
  );
};

export default Smurf;
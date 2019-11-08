import React from 'react';

const Smurf = props => {
  const smurf = props.smurf;
  return (
    <div>
      <p>name: { smurf.name }</p>
      <p>age: { smurf.age }</p>
      <p>height: { smurf.height }</p>
    </div>
  );
};

export default Smurf;
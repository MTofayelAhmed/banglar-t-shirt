import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
  const angti = useContext(RingContext)
  return (
    <div>
      <h5>Special</h5>
      <p><small>{angti}</small></p>
    </div>
  );
};

export default Special;
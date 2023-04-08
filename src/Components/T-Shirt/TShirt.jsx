import React from 'react';
import './TShirt.css'

const TShirt = ({singleTShirt, handleAddToCart}) => {
 
  const {gender, name, picture, price, _id}= singleTShirt
  return (
    <div className='t-shirt'>
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>price: ${price}</p>
      <button onClick={()=>handleAddToCart(singleTShirt)} className='btn-now'>Buy Now</button>
    </div>
  );
};

export default TShirt;
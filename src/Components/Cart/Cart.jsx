import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
let message ;
if(cart.length === 0){
  message = <p>Please add some products</p>
}
else{
  message =<p>thanks for wasting your money</p>

}
  return (
    <div>
      <p>this is order summary: {cart.length}</p>
      {cart.length> 2 ? <span>"aro kino"</span> : <small>"fokir"</small>}
      {message}
      
 
      
      {
        cart.map(tShirt=> <p key ={tShirt._id}>{tShirt.name} <button onClick={()=>handleRemoveFromCart(tShirt._id)}>X</button></p> )
      }

    </div>
  );
};

export default Cart;
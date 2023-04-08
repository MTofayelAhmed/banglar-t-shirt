import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "../T-Shirt/TShirt";
import "./Home.css";
import Cart from "../Cart/Cart";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const data = useLoaderData();

  const [cart, setCart] = useState([]);
  const handleAddToCart = (singleTShirt) => {
    const exists = cart.find((tShirt) => tShirt._id === singleTShirt._id);
    if (exists) {
      toast("this item is already exist");
    }
    else{
      const newCart = [...cart, singleTShirt];
      setCart(newCart);
    }
  
  };

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((TShirt) => TShirt._id !== id);
    setCart(remaining);
  };

  return (
    <div className="home-container">
      <div className="t-shirt-container">
        {data.map((singleTShirt) => (
          <TShirt
            key={singleTShirt._id}
            singleTShirt={singleTShirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>

      <div className="cart-container">
        <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
      </div>
      <Toaster />
    </div>
  );
};

export default Home;

import React, { useState, useEffect, useContext } from "react";
import "../styles/Cart.css";
import { CartContext } from "../context/CartProvider";

function Cart() {
  const [price, setPrice] = useState(0);
  const { cart, setCart, handleChange } = useContext(CartContext);


  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => {
      return (ans += item.amount * item.price);
    });
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const remainingArr = cart.filter((item) => item.id !== id);
    setCart(remainingArr);
  };
  useEffect(() => {
    handlePrice();
  });
  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, -1)}>-</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, +1)}>+</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of Your Cart</span>
        <span>Rs - {price}</span>
      </div>
    </article>
  );
}

export default Cart;

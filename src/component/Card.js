import React, { useContext } from "react";
import "../styles/Card.css";
import { CartContext } from "../context/CartProvider";
import { DispatchContext } from "../context/CartProvider";

function Card({ item }) {
  const { title, author, price, img } = item;
  const state = useContext(CartContext);
  const dispatch = useContext(DispatchContext);

  const handleClick = (item) => {
    let isPresent = false;
    state.cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      dispatch({ type: "WARNING", payload: true });
      setTimeout(() => {
        dispatch({ type: "WARNING", payload: false });
      }, 2000);
      return;
    }
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  return (
    <div className="cards">
      <div className="image-box">
        <img src={img} alt={title} />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price-{price}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;

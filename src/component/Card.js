import React, { useContext } from "react";
import "../styles/Card.css";
import { CartContext } from "../context/CartProvider";

function Card({ item }) {
  const { title, author, price, img } = item;
  const { dispatch } = useContext(CartContext);
  return (
    <div className="cards">
      <div className="image-box">
        <img src={img} alt={title} />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price-{price}</p>
        <button onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;

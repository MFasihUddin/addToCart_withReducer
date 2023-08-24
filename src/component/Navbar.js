import React, { useContext } from "react";
import "../styles/Navbar.css";
import { ShowContext } from "../context/CartProvider";
import { CartContext } from "../context/CartProvider";

function Navbar() {
  const { state } = useContext(CartContext);
  const { shopToggle, cartToggle } = useContext(ShowContext);
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={shopToggle}>
          My Shop
        </span>
        <div className="cart" onClick={cartToggle}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{state.cart.length}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

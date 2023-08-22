import React, { Fragment, useContext } from "react";
import Navbar from "./Navbar";
import Amazon from "./Amazon";
import Cart from "./Cart";
import { ShowContext } from "../context/CartProvider";
import { CartContext } from "../context/CartProvider";

function HomePage() {
  const { show } = useContext(ShowContext);
  const { warning } = useContext(CartContext);

  return (
    <Fragment>
      <Navbar />
      {show ? <Amazon /> : <Cart />}
      {warning && <h2 className="warning">Item is already added</h2>}
    </Fragment>
  );
}

export default HomePage;

import React, { useContext } from "react";
import HomePage from "./component/HomePage";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <CartProvider>
      <HomePage />
    </CartProvider>
  );
}

export default App;

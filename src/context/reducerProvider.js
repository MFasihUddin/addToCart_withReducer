import React, { createContext } from "react";
import useToggle from "../hooks/useToggle";
import { useCartHook } from "../hooks/useCartHook";

export const ShowContext = createContext();
export const CartContext = createContext();

function CartProvider(props) {
  const [show, shopToggle, cartToggle] = useToggle(true);
  const { cart, warning, setCart, handleClick, handleChange } = useCartHook([]);
  return (
    <ShowContext.Provider value={{ show, shopToggle, cartToggle }}>
      <CartContext.Provider
        value={{cart, warning, setCart, handleClick, handleChange}}
      >
        {props.children}
      </CartContext.Provider>
    </ShowContext.Provider>
  );
}

export default CartProvider;

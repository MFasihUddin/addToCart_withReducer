import React, { createContext } from "react";
import useToggle from "../hooks/useToggle";
import { useCartReducerHook } from "../hooks/useCartReducerHook";
import { cartReducer } from "../reducer/cartReducer";

export const ShowContext = createContext();
export const CartContext = createContext();

const initialVal = []

function CartProvider(props) {
  const [show, shopToggle, cartToggle] = useToggle(true);
  const { cart, dispatch } = useCartReducerHook(initialVal, cartReducer);
  console.log(cart)
  return (
    <ShowContext.Provider value={{ show, shopToggle, cartToggle }}>
      <CartContext.Provider value={{ cart, dispatch }}>
        {props.children}
      </CartContext.Provider>
    </ShowContext.Provider>
  );
}

export default CartProvider;

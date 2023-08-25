import React, { createContext, useReducer } from "react";
import useToggle from "../hooks/useToggle";
import { initialVal, cartReducer } from "../reducer/cartReducer";

export const ShowContext = createContext();
export const CartContext = createContext();
export const DispatchContext = createContext();

function CartProvider({ children }) {
  const [show, shopToggle, cartToggle] = useToggle(true);
  const [state, dispatch] = useReducer(cartReducer, initialVal);
  return (
    <ShowContext.Provider value={{ show, shopToggle, cartToggle }}>
      <CartContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          {children}
        </DispatchContext.Provider>
      </CartContext.Provider>
    </ShowContext.Provider>
  );
}

export default CartProvider;

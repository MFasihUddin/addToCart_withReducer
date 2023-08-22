import { useReducer, useState } from "react";

export const useCartReducerHook = (initialVal, cartReducer) => {
  const [cart, setCart] = useReducer(cartReducer, initialVal);
  const [warning, setWarning] = useState(false);
  return {
    cart,
    setCart,
    warning,
    handleClick: (item) => {
      let isPresent = false;
      cart.forEach((product) => {
        if (item.id === product.id) {
          isPresent = true;
        }
      });

      if (isPresent) {
        setWarning(true);
        setTimeout(() => {
          setWarning(false);
        }, 2000);
        return;
      }
      setCart([...cart, item]);
    },
    handleChange: (item, d) => {
      let ind = -1;
      cart.forEach((data, index) => {
        if (data.id === item.id) ind = index;
      });
      const tempArr = cart;
      tempArr[ind].amount += d;

      if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
      setCart([...tempArr]);
    },
  };
};

// handlePrice: () => {
//   let ans = 0;
//   cart.map((item) => {
//     return (ans += item.amount * item.price);
//   });
//   setPrice(ans);
// },
// handleRemove: (id) => {
//   const remainingArr = cart.filter((item) => item.id !== id);
//   setCart(remainingArr);
// },

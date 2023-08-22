export const defaultVal = {
  warning: false,
};

export const cartReducer = (cart, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...cart, action.payload];
    case "REMOVE":
      return cart.filter((item) => item.id !== action.id);
    default:
      return cart;
  }
};



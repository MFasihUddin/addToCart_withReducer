export const initialVal = {
  cart: [],
  warning: false,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "WARNING":
      return {
        ...state,
        warning: action.payload,
      };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};

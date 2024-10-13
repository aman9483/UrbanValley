// src/redux/actions/cartActions.js

export const loadCartFromLocalStorage = (cartItems) => {
    return {
      type: "LOAD_CART_FROM_LOCAL_STORAGE",
      payload: cartItems,
    };
  };
  
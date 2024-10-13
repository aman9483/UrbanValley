import { createSlice } from "@reduxjs/toolkit";

// Function to load cart from localStorage
const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: loadCartFromLocalStorage(), // Load cart from localStorage on initialization
  },
  reducers: {
    // Add to Cart
    addToCart: (state, action) => {
      // Check for existing item
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      // If exists, increment quantity; otherwise, add item
      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        state.cart.push({ ...action.payload, qty: 1 }); // Ensure qty is initialized to 1
      }

      // Update localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    // Remove from Cart
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );

      // Update localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    // Increment item quantity
    incrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );

      // Update localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    // Decrement item quantity
    decrementQty: (state, action) => {
      const itemToDecrement = state.cart.find(item => item.id === action.payload.id);
      if (itemToDecrement && itemToDecrement.qty > 1) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty - 1 }
            : item
        );
      } else {
        // If quantity is 1, remove the item from the cart
        state.cart = state.cart.filter(item => item.id !== action.payload.id);
      }

      

      // Update localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  CartSlice.actions;

export default CartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
   name: "cart",
   initialState: {
      cart: [],
   },
   reducers: {
      // Add to Cart
      addToCart: (state, action) => {
         // Check the exit item Data
         const existingItem = state.cart.find(
            (item) => item.id === action.payload.id
         );

         // if 'YES' then change only qty(Quantity) + 1
         if (existingItem) {
            state.cart = state.cart.map((item) =>
               item.id === action.payload.id
                  ? { ...item, qty: item.qty + 1 }
                  : item
            );
         }
         // else 'NO' then add item to Cart
         else {
            state.cart.push(action.payload);
         }
      },

      // Remove from Cart
      removeFromCart: (state, action) => {
         state.cart = state.cart.filter(
            (item) => item.id !== action.payload.id
         );
      },

      // Increment items from Cart
      incrementQty: (state, action) => {
         state.cart = state.cart.map((item) =>
            item.id === action.payload.id
               ? { ...item, qty: item.qty + 1 }
               : item
         );
      },

      // Decrement items from Cart
      decrementQty: (state, action) => {
         state.cart = state.cart.map((item) =>
            item.id === action.payload.id
               ? { ...item, qty: item.qty - 1 }
               : item
         );
      },
   },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } =
   CartSlice.actions;

export default CartSlice.reducer;

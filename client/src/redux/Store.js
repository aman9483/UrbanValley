import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import { productReducer } from "./reducers/product";
import {userReducer} from "./reducers/user";

const Store = configureStore({
   reducer: {
    productList : productReducer,
    userAuth: userReducer,
    cart: CartSlice,
   },
});
export default Store;
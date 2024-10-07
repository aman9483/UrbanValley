// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer.js';

// Create the Redux store using @reduxjs/toolkit's configureStore
const store = configureStore({
  reducer: rootReducer, // Root reducer that combines all slices
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(), // Default middleware already includes thunk
  devTools: process.env.NODE_ENV !== 'production', // Enable DevTools in development mode
});

export default store;

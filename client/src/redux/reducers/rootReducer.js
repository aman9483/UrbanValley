// src/redux/reducers/rootReducer.js

import { combineReducers } from 'redux';
import { productReducer } from './product';

const rootReducer = combineReducers({
  productList: productReducer,
  // Add other reducers here
});

export default rootReducer;

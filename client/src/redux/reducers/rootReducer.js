// src/redux/reducers/rootReducer.js

import { combineReducers } from 'redux';
import { productReducer } from './product';
import { userReducer } from './user';

const rootReducer = combineReducers({
  productList: productReducer,
  userAuth: userReducer
});

export default rootReducer;

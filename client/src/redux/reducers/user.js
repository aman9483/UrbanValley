// src/redux/reducers/userReducer.js

import {
    FETCH_USER_REGISTER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    FETCH_USER_LOGIN,
    FETCH_USER_FAILURE,
    FETCH_USER_LOGOUT_SUCCESS,
  } from '../constant/user';
  
  const initialState = {
    user: null,
    loading: false,
    error: null,
  };
  
  // User Reducer
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER_REGISTER:
        return {
          ...state,
          loading: true,
          error: null,
        };
      
      case FETCH_USER_LOGIN:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case FETCH_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          user: action.payload,
          error: null,
        };
  
      case FETCH_USER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case FETCH_USER_LOGOUT_SUCCESS:
        return {
          ...state,
          user: null,
        };
  
      default:
        return state;
    }
  };
  
  export default userReducer;
  
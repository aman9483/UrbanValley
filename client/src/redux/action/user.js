// src/redux/actions/userActions.js

import axios from 'axios';
import {
  FETCH_USER_REGISTER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_LOGIN,
  FETCH_USER_LOGOUT,
} from '../constant/user';

// Base URL for API
const url = "http://localhost:8000";


export const RegisterUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_USER_REGISTER });

    // Make a POST request to register the user
    const { data } = await axios.post(`${url}/api/v1/users/register`, userData)

    // Dispatch success action with user data
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: data.user, 
    });
  } catch (error) {
    // Dispatch failure action if there's an error
    dispatch({
      type: FETCH_USER_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const LoginUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_USER_LOGIN });

    // Make a POST request to log in the user
    const { data } = await axios.post(`${url}/api/v1/users/login`, userData);

    // Dispatch success action with user data
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    // Dispatch failure action if there's an error
    dispatch({
      type: FETCH_USER_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

// Action Creator for Logging out a User
export const LogoutUser = () => async (dispatch) => {
  try {
    await axios.post(`${url}/api/v1/users/logout`);
    dispatch({ type: FETCH_USER_LOGOUT });
  } catch (error) {
    dispatch({
      type: FETCH_USER_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast
import {
  ALL_login_FAILURE,
  ALL_login_REQUESTS,
  ALL_login_SUCCESS,
  CLEAR_ERRORS,
  ALL_Register_REQUESTS,
  ALL_Register_SUCCESS,
  ALL_Register_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  FETCH_USER_LOGOUT,
  FETCH_USER_FAILURE
} from '../constant/user';

// Base URL for API
const url = "http://localhost:8000";

// Login Action
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ALL_login_REQUESTS });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`${url}/api/v1/users/login`, { email, password }, config);

    dispatch({ type: ALL_login_SUCCESS, payload: data.user });

    // Save user data to local storage
    localStorage.setItem('user', JSON.stringify(data.user));

    // Show success toast
    toast.success('Login successful!');

    // Return success and user data to the component
    return { success: true, user: data.user };
  } catch (error) {
    dispatch({ type: ALL_login_FAILURE, payload: error.response.data.message });

    // Show error toast
    toast.error(error.response.data.message);

    // Return failure and error message to the component
    return { success: false, message: error.response.data.message };
  }
};

// Register Action
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: ALL_Register_REQUESTS });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`${url}/api/v1/users/register`, userData, config);

    dispatch({ type: ALL_Register_SUCCESS, payload: data.user });

    // Save user data to local storage
    localStorage.setItem('user', JSON.stringify(data.user));

    // Show success toast
    toast.success('Registration successful!');

    // Return success and user data to the component
    return { success: true, user: data.user };
  } catch (error) {
    dispatch({ type: ALL_Register_FAILURE, payload: error.response.data.message });

    // Show error toast
    toast.error(error.response.data.message);

    // Return failure and error message to the component
    return { success: false, message: error.response.data.message };
  }
};

// Logout Action
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS }); // Ensure you have this action defined
  localStorage.removeItem('user'); // Clear user from local storage

  // Show success toast
  toast.success('Logout successful! Come back soon!');
};

// Action Creator for Logging out a User
export const LogoutUser = () => async (dispatch) => {
  try {
    await axios.post(`${url}/api/v1/users/logout`);
    dispatch({ type: FETCH_USER_LOGOUT });

    // Show success toast
    toast.success('Logout successful! Come back soon!');
  } catch (error) {
    dispatch({
      type: FETCH_USER_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

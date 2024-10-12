import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast
import { ALL_login_FAILURE, ALL_login_REQUESTS, ALL_login_SUCCESS, CLEAR_ERRORS, ALL_Register_REQUESTS, ALL_Register_SUCCESS, ALL_Register_FAILURE , LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL, PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAIL, UPDATE_password_SUCCESS, UPDATE_password_REQUEST, UPDATE_password_FAIL,USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL } from '../constant/user';

// Base URL for API
const url = "http://localhost:8000";

// Login Action
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ALL_login_REQUESTS });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `${url}/api/v1/users/login`,
      { email, password },
      config
    );

    dispatch({ type: ALL_login_SUCCESS, payload: data.user });

    // Save user data to local storage
    localStorage.setItem('user', JSON.stringify(data.user));

    // Return success and user data to the component
    return { success: true, user: data.user };
  } catch (error) {
    dispatch({ type: ALL_login_FAILURE, payload: error.response.data.message });

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

    // Return success and user data to the component
    return { success: true, user: data.user };
  } catch (error) {
    dispatch({
      type: ALL_Register_FAILURE,
      payload: error.response.data.message,
    });

    // Return failure and error message to the component
    return { success: false, message: error.response.data.message };
  }
};

// Logout Action
export const logout = () => (dispatch) => {
  dispatch({ type: ALL_LOGOUT }); // Ensure you have this action defined
  localStorage.removeItem('user'); // Clear user from local storage
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

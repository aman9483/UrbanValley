// src/redux/actions/productActions.js

import axios from 'axios';
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from '../constant/product';


// Action Creator for fetching products
export const fetchProducts = () => async (dispatch) => {

    const url = "http://localhost:8000"
  try {
    // Dispatching initial action to indicate fetching is in progress
    dispatch({ type: FETCH_PRODUCTS_REQUEST });

    // Make an API call to your backend to fetch products
    const { data } = await axios.get(`${url}/api/v1/`);

    // Dispatching success action if the request is successful
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: data.products, // Assuming your API returns a `products` array
    });
  } catch (error) {
    // Dispatching failure action if there's an error
    dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

import { 
  ALL_login_FAILURE, 
  ALL_login_REQUESTS, 
  ALL_login_SUCCESS, 
  CLEAR_ERRORS, 
  ALL_Register_REQUESTS, 
  ALL_Register_SUCCESS, 
  ALL_Register_FAILURE, 
  LOAD_USER_REQUEST, 
  LOAD_USER_SUCCESS, 
  LOAD_USER_FAIL, 
  
} from '../constant/user';

// Retrieve user data from local storage
const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));

export const userReducer = (state = { user: userFromLocalStorage || {} }, action) => {
  switch (action.type) {
    case ALL_login_REQUESTS:
    case ALL_Register_REQUESTS:
    case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: !!state.user, 
      };

    case ALL_login_SUCCESS:
    case ALL_Register_SUCCESS:
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case ALL_login_FAILURE:
    case ALL_Register_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

// Rest of your reducers...

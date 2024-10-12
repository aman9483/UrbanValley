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
  PROFILE_REQUEST,
  PROFILE_SUCCESS, 
  PROFILE_FAIL, 
  UPDATE_password_REQUEST,
  UPDATE_password_FAIL, 
  UPDATE_password_SUCCESS, 
  ALL_USERS_REQUEST, 
  ALL_USERS_SUCCESS, 
  ALL_USERS_FAIL, 
  USER_DETAILS_SUCCESS, 
  USER_DETAILS_REQUEST, 
  USER_DETAILS_FAIL 
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
        isAuthenticated: !!state.user, // Check if user is authenticated
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

export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_REQUEST:
    case UPDATE_password_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PROFILE_SUCCESS:
    case UPDATE_password_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case PROFILE_FAIL:
    case UPDATE_password_FAIL:
      return {
        ...state,
        loading: false,
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

export const allUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case ALL_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case ALL_USERS_FAIL:
      return {
        ...state,
        loading: false,
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

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case USER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
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

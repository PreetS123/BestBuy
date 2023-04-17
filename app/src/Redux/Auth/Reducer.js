import * as types from "./actionTypes";

const initState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  token: "",
};

export const authReducer = (state = initState, { payload, type }) => {
  switch (type) {
    case types.SIGNUP_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case types.SIGNUP_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isAuth: false,
      };
    }
    case types.LOGIN_SUCCESS: {
      if (payload.token) {
        localStorage.setItem("token", payload.token);
        localStorage.setItem("userData", JSON.stringify(payload.message));
      }
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: payload,
        isAuth: true,
      };
    }
    case types.LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.LOGOUT_SUCCESS: {
      localStorage.removeItem("token");
      return { 
        ...state,
         isAuth: false
         };
    }
    default:
      return state;
  }
};

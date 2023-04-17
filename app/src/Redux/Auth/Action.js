import * as types from "./actionTypes";
import Axios from "axios";

const signupRequest = () => ({
  type: types.SIGNUP_REQUEST,
});

const signupSuccess = () => ({
  type: types.SIGNUP_SUCCESS,
});

const signupFailure = (payload) => ({
  type: types.SIGNUP_FAILURE,
  payload,
});

export const userSignup = (payload) => (dispatch) => {
  dispatch(signupRequest());
  // console.log("userSignup action file payload data", payload);
  Axios.post("/user/signup", payload)
    .then((r) => {
      console.log("signupdata", r.data);
      dispatch(signupSuccess());
    })
    .catch((e) => dispatch(signupFailure(e.message)));
};


const loginRequest = () => ({
  type: types.LOGIN_REQUEST,
});

const loginSuccess = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

const loginFailure = (payload) => ({
  type: types.LOGIN_FAILURE,
  payload,
});

export const userLogin = (payload) => (dispatch) => {
  dispatch(loginRequest());
  console.log("userLogin action file payload data", payload);
  Axios.post("/user/login", payload)
    .then((r) => {
      console.log("logindata", r.data);
      dispatch(loginSuccess(r.data));
    })
    .catch((e) => dispatch(loginFailure(e.message)));
};



export const logoutApi=()=>(dispatch)=>{
  dispatch({type:types.LOGOUT_SUCCESS});
}
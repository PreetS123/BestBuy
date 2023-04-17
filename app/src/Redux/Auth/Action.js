import * as types from "./actionTypes";
import Axios from "axios";

const signupRequest = () => ({
  type: types.SIGNUP_REQUEST,
});

const signupSuccess = (payload) => ({
  type: types.SIGNUP_SUCCESS,
  payload,
});

const signupFailure = (payload) => ({
  type: types.SIGNUP_FAILURE,
  payload,
});

export const userSignup = (payload) => (dispatch) => {
  dispatch(signupRequest());
  console.log("userSignup action file payload data", payload);
  Axios.post("/user/signup", payload)
    .then((r) => {
      console.log("signupdata", r.data);
      dispatch(signupSuccess(r.data));
    })
    .catch((e) => dispatch(signupFailure(e.message)));
};

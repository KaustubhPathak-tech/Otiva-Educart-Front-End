import * as api from "../api";
import { setCurrentUser } from "./currentUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: "SIGNUP", data });
    // dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    // alert("Sign Up Successful! login session expires in 1 hour!");
    navigate("/verify");
  } catch (error) {
    toast(error.response.data);
    console.log(error);
  }
};

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: "LOGIN", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    alert("log in Successful! login session expires in 1 hour !");

    navigate("/");
  } catch (error) {
    toast(error.response.data);
    console.log(error);
    <ToastContainer />;
  }
};

export const reset = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.reset(authData);
    dispatch({ type: "RESET", data });
    alert("If user exists then password will be updated ! Click Ok to login !");
    navigate("/login");
  } catch (error) {
    toast(error.response.data);
    console.log(error);
    <ToastContainer />;
  }
};

export const verifyOTP = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.verify(authData);

    dispatch({ type: "VERIFY", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    
    alert("success!");
    navigate("/");
  } catch (error) {
    toast(error.response.data);
    console.log(error);
    <ToastContainer />;
  }
};



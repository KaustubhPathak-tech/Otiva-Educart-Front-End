import * as api from "../api";
import { setCurrentUser } from "./currentUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    alert("Sign Up Successful! login session expires in 1 hour!");
    navigate("/");
  } catch (error) {
    toast(error.response.data);
    console.log(error);
  }
};

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    alert("log in Successful! login session expires in 1 hour !");

    navigate("/");
  } catch (error) {
    toast(error.response.data);
    console.log(error);
    <ToastContainer />;
  }
};

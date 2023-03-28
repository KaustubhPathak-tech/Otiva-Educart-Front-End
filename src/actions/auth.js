import * as api from "../api";
import { setCurrentUser } from "./currentUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: "SIGNUP", data });
    // dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    // alert("Sign Up Successful! login session expires in 1 hour!");
    navigate("/verify");
  } catch (error) {
    toast.error(error.response.data,{position:"top-center"});
    
  }
};

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: "LOGIN", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/");
  } catch (error) {
    toast.error(error.response.data,{position:"top-center"});
    <ToastContainer />;
  }
};
export const logout = (authData) => async (dispatch) => {
  try {
    const { data } = await api.logout(authData);
    dispatch({ type: "LOGIN", data });
  } catch (error) {
    toast.error(error.response.data,{position:"top-center"});
    
    <ToastContainer />;
  }
};
export const getpremium = (authData, navigate) => async (dispatch) => {
  try {
    const {
      data: { key },
    } = await api.getkey();
    const { data } = await api.getPremium(authData);
    
    dispatch({ type: "GET_PREMIUM", data });

    const options = {
      key: key, // Enter the Key ID generated from the Dashboard
      amount: data.order.amount, //order.amount Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Stack Over Flow Clone 2023",
      description:
        "This is the Best ever clone of Famous Coding Question-Answer Hub , Stackoverflow.Inc ",
      image:
        "https://www.vectorlogo.zone/logos/stackoverflow/stackoverflow-official.svg",
      order_id: data.order.id, //order.id This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "https://stack-overflow-server.vercel.app/payment/paymentverification",

      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#FBAE09",
      },
    };
    
    const razor = new window.Razorpay(options);
    razor.open();
    // navigate(`/paymentsuccess?reference=${razorpay_payment_id}`);
  } catch (error) {
    toast.error(error.response.data,{position:"top-center"});
    
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
    toast.error(error.response.data);
    
    <ToastContainer />;
  }
};

export const verifyOTP = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.verify(authData);

    dispatch({ type: "VERIFY", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));

    navigate("/");
  } catch (error) {
    toast.error(error.response.data,{position:"top-center"});
    <ToastContainer />;
  }
};

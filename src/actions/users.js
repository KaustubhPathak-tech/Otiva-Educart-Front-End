import * as api from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const fetchAllUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllUsers();
    dispatch({ type: "FETCH_USERS", payload: data });
  } catch (error) {}
};

export const updateProfile = (id, updateData) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(id, updateData);
    dispatch({ type: "UPDATE_CURRENT_USER", payload: data });
  } catch (error) {
    toast.error(error.response.data, { position: "top-center" });
  }
};

export const deleteAccount = (id, navigate) => async (dispatch) => {
  try{
    const { data } = api.deleteaccount(id);
    dispatch(fetchAllUsers());
    toast.success("Account deleted successfully !",{ position: "top-center" });
    setTimeout(()=>{navigate("/");},5000);
    
  } catch (error) {
    toast.error(error.response.data, { position: "top-center" });
  }
};

import { combineReducers } from "redux";
import authReducer from "./auth";
import fetch_current_userReducer from "./currentUser";
import questionReducer from "./question";
import usersReducer from "./users";

export default combineReducers({
  authReducer,
  fetch_current_userReducer,
  questionReducer,
  usersReducer,
});

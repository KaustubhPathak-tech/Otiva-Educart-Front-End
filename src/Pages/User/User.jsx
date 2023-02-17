import React from "react";
import { useLocation } from "react-router-dom";
import LeftSidebar from "../../components/LeftsideBar/LeftsideBar";
import UsersList from "./UsersList";
import "./User.css";
const User = () => {
  const location = useLocation();

  return (
    <div className="userpage">
      <div className="home-container-1">
        <LeftSidebar />
      </div>
      <div className="home-container-2" id="userlist">
        <h1 style={{fontWeight:"400"}}>Users</h1>
        <UsersList />
      </div>
    </div>
  );
};

export default User;

import React from "react";

import LeftSidebar from "../../components/LeftsideBar/LeftsideBar";
import UsersList from "./UsersList";
import "./User.css";
const User = () => {
 

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

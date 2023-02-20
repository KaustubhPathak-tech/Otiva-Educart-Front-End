import React from "react";
import "./LeftsideBar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";

const LeftsideBar = ({ question }) => {
  return (
    <div className="home-container-1-1">
      
        <div className="side-nav-div">
          <NavLink to="/" className="side-nav-links" activeclassname="active">
            <p>Home</p>
          </NavLink>
          <p id="side-nav-div-public">PUBLIC</p>
          <NavLink
            to="/Questions"
            className="side-nav-links"
            activeclassname="active"
            id="questions"
          >
            <img src={Globe} alt="globe" style={{marginBottom:"6px"}}/>
            &nbsp; <p style={{marginTop:"5px"}}>Questions </p>
          </NavLink>

          <NavLink
            to="/tags"
            className="side-nav-links"
            activeclassname="active"
          >
            <p>Tags</p>
          </NavLink>

          <NavLink
            to="/users"
            className="side-nav-links"
            activeclassname="active"
          >
            <p>Users</p>
          </NavLink>
        </div>
     
    </div>
  );
};

export default LeftsideBar;

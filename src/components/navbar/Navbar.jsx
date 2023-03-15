//importing packages
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../actions/auth";
import Button from 'react-bootstrap/Button'
//importing style


import logo from "../../assets/logo.png";
import searchicon from "../../assets/searchicon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

//importing components
import Avatar from "./Avatar";
import { setCurrentUser } from "../../actions/currentUser";



//main function goes here
const Navbar = () => {
  
  const dispatch = useDispatch();
  var User = useSelector((state) => (state.fetch_current_userReducer));
  const [email, setEmail] = useState(User?.result?.email);
  var currentplan = (User?.result?.plan);
  var stat = User?.status;
  var premiumcontent = "Get Premium";

  if (currentplan === "Free" || currentplan === "NULL") {

    premiumcontent = "Get Premium"
  }
  else if (currentplan === "Silver" && stat === "no") {
    premiumcontent = "Upgrade"

  }
  else if (currentplan === "Gold" && stat === "no") {

    premiumcontent = "!"
  }
  const Navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logout({ email }));
    dispatch({ type: "LOGOUT" });
    dispatch(setCurrentUser(null));
    Navigate("/");
  };

  useEffect(() => {

    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-md fixed-top bg-body-tertiary">
        <div class="container-fluid">

          <Link to="/" className="nav-logo nav-item">
            <img src={logo} alt="official logo"></img>
          </Link>
          <button
            class="navbar-toggler"
            id="toggle-button"
            type="Button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: "none" }}
            
          >
            <span class="" ><FontAwesomeIcon icon={faBars} style={{ color: "#fb9404" }} /></span> 
            {/* // */}

          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

              <li>

                <Link
                  to="https://stackoverflow.co/"
                  target="_blank"
                  className="nav-btn nav-item"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="nav-btn nav-item"
                >
                  Pricing
                </Link>
              </li>
              <li class="dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="nav-item nav-btn"
                >
                  Projects
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://gi-qnx4.onrender.com/"
                    >
                      News Letter Subscription
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://stack-over-flow-clone-2023.netlify.app/"
                    >
                      StackOverFlow Clone
                    </a>
                  </li>

                  <li>
                    <a
                      class="dropdown-item"
                      href="https://kaustubhpathak-tech.github.io/simon_game/"
                    >
                      Simon Game !
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://kaustubhpathak-tech.github.io/tindog-project/"
                    >
                      Tindog
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://easy-e-life.web.app/"
                    >
                      Easy-e-Life
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://sites.google.com/view/gayatrirubberindustries-vasai/home?pli=1"
                    >
                      Gayatri Industries Vasai
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="http://gi009.000webhostapp.com/"
                    >
                      Gayatri Industries Vasai Project II{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://myportfolio-hjbl.onrender.com/"
                    >
                      My Portfolio
                    </a>
                  </li>
                </ul>
              </li>

            </ul>
            <form class="d-flex" role="search" id="searchform">
              <img
                src={searchicon}
                alt="searchicon"
                width="18px"
                className="searchicon"
              />
              <input
                type="text"
                name="searchbox"
                id="searchinput"
                placeholder="Search..."
                class="form-control me-2"
              />

            </form>&nbsp;&nbsp;




            {User === null ? (
              <>
                <Link to="/login" className="nav-links nav-btn nav-item fonting">
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="nav-links nav-btn nav-item fonting"
                  id="special-button"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <>
                <Avatar
                  backgroundColor="#009dff"
                  px="12px"
                  py="5px"
                  borderRadius="10%"
                  color="white"
                >
                  <Link
                    to={`/users/${User?.result?._id}`}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {User.result.name.charAt(0).toUpperCase()}
                  </Link>
                </Avatar>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link
                  className="nav-links nav-btn nav-item fonting"
                  onClick={handleLogout}
                  id="special-button"
                >
                  Log out
                </Link>
              </>
            )}
            {
              currentplan === ('Gold') ? (<></>) : (<><Link to="/pricing" className="nav-links nav-btn nav-item fonting" id="special-button">{premiumcontent}</Link></>)
            }
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;

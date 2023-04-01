//importing packages
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../actions/auth";
import decode from "jwt-decode"
import Dropdown from 'react-bootstrap/Dropdown';

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
const Navbar = (src) => {

  const dispatch = useDispatch();
  var User = useSelector((state) => (state.fetch_current_userReducer));
  const [email, setEmail] = useState(User?.result?.email);
  var currentplan = (User?.result?.plan);
  var stat = User?.status;
  var premiumcontent = "Get Premium";
  var srcofPic = src;
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
  useEffect(() => {
    const existingtoken = User?.token;
    if (existingtoken) { const decodedToken = decode(existingtoken); if (decodedToken.exp * 1000 < new Date().getTime()) { dispatch(setCurrentUser(null)); } }
  }, [dispatch]);
  console.log(srcofPic);


  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-md fixed-top bg-body-tertiary">

        <div class="container-fluid">

          <Link to="/" className="nav-logo nav-item">
            <img src={logo} alt="official logo"></img>
          </Link>
          <Dropdown
            class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around "
            id="landaa"
            type="Button"
            // data-bs-toggle="collapse"
            // data-bs-target="#navbarSupportedContent"
            // aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Dropdown.Toggle style={{ backgroundColor: "#faf7f7", border: "none", color: "white" }}>
              <FontAwesomeIcon icon={faBars} style={{ color: "#ff7003", width: "20px", padding: "0" }} />
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: "410px" }}>
              <Dropdown.Item href="https://gi009.000webhostapp.com/"><Link
                to="https://gi009.000webhostapp.com/"
                target="_blank"
                className="nav-btn nav-item"

              >
                About
              </Link></Dropdown.Item>
              <Dropdown.Item href=""><Link
                to="/pricing"
                className="nav-btn nav-item"

              >
                Pricing
              </Link></Dropdown.Item>
              <ul type="none"><li><Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-basic" style={{ backgroundColor: "white", border: "none", color: "white" }}>
                  <span style={{ color: "black", fontSize: "13px", fontWeight: "600", marginLeft: "-10px" }}>Project
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1"><a
                    class="dropdown-item"
                    href="https://myportfolio-pink-eta.vercel.app/"
                  >
                    My Portfolio
                  </a></Dropdown.Item>
                  <Dropdown.Item href="#/action-2"> <a
                    class="dropdown-item"
                    href="https://gi-qnx4.onrender.com/"
                  >
                    News Letter Subscription
                  </a></Dropdown.Item>
                  <Dropdown.Item href="#/action-3"><a
                    class="dropdown-item"
                    href="https://stack-over-flow-clone-2023.netlify.app/"
                  >
                    StackOverFlow Clone
                  </a></Dropdown.Item>
                  <Dropdown.Item href="#/action-3"><a
                    class="dropdown-item"
                    href="https://kaustubhpathak-tech.github.io/simon_game/"
                  >
                    Simon Game !
                  </a></Dropdown.Item>
                  <Dropdown.Item href="#/action-3"><a
                    class="dropdown-item"
                    href="https://kaustubhpathak-tech.github.io/tindog-project/"
                  >
                    Tindog
                  </a></Dropdown.Item>
                  <Dropdown.Item href="#/action-3"><a
                    class="dropdown-item"
                    href="https://easy-e-life.web.app/"
                  >
                    Easy-e-Life
                  </a></Dropdown.Item>
                  <Dropdown.Item href="#/action-3"><a
                    class="dropdown-item"
                    href="https://sites.google.com/view/gayatrirubberindustries-vasai/home?pli=1"
                  >
                    Gayatri Industries Vasai
                  </a></Dropdown.Item>


                </Dropdown.Menu>
              </Dropdown></li></ul>
              <form class="d-flex" role="search" id="searchform" style={{ marginLeft: "24px", width: "50%" }}>
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
                  autoComplete="off"
                />

              </form><br />
              <Dropdown.Item href="" >{User === null ? (
                <>
                  <Link to="/login" className="nav-links nav-btn nav-item fonting" style={{ marginLeft: "21px" }}>
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    className="nav-links nav-btn nav-item fonting"
                    id="special-button"
                    style={{ marginLeft: "0px", padding: "8px 14px 7px 14px" }}
                  >
                    Sign up
                  </Link>
                </>
              ) : (
                <>
                  <div className="avatar" style={{ textAlign: "center" }}>

                    <Avatar
                      backgroundColor="#009dff"
                      px="70px"
                      py="7px"
                      borderRadius="5px"
                      color="white"

                    >
                      <Link
                        to={`/users/${User?.result?._id}`}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        {User.result.name.charAt(0).toUpperCase()}
                      </Link>
                    </Avatar>

                  </div>
                  {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                  <Link
                    className="nav-links nav-btn nav-item fonting"
                    onClick={handleLogout}
                    id="special-button"
                    style={{ marginLeft: "20px", padding: "3px 40px 7px 54px" }}
                  >
                    Log out
                  </Link>
                </>
              )}</Dropdown.Item>


              <Dropdown.Item href="#/action-3" style={{ marginBottom: "15px", marginLeft: "12px" }}>{
                currentplan === ('Gold') ? (<></>) : (<><Link to="/pricing" className="nav-links nav-btn nav-item fonting" id="special-button" style={{ marginLeft: "8px", padding: "5px 30px 7px 35px" }}>{premiumcontent}</Link></>)
              }</Dropdown.Item>





            </Dropdown.Menu>

          </Dropdown>
          {/* <button
            class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
            id="toggle-button"
            type="Button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >

            <span class="toggler-icon top-bar"></span>
            <span class="toggler-icon middle-bar"></span>
            <span class="toggler-icon bottom-bar"></span>


          </button> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

              <li>

                <Link
                  to="https://gi009.000webhostapp.com/"
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
                      href="https://myportfolio-pink-eta.vercel.app/"
                    >
                      My Portfolio
                    </a>
                  </li>
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
                autoComplete="off"
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

                &nbsp;&nbsp;&nbsp;
                {
                  (srcofPic !== null) && (
                    <img src={`${srcofPic?.src}`} alt="_" style={{
                      borderRadius: "50%", width: "35px", height: "35px",
                      border: "1px solid blue"
                    }}></img>)
                }





                &nbsp;&nbsp;
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

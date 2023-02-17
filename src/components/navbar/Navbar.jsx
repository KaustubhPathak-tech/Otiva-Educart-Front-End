import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import searchicon from "../../assets/searchicon.svg";
import Avatar from "./Avatar";
import "./Navbar.css";
import { setCurrentUser } from "../../actions/currentUser";

const Navbar = () => {
  const dispatch = useDispatch();

  var User = useSelector((state) => state.fetch_current_userReducer);
  // User=JSON.parse(localStorage.getItem('Profile'))

  // const [User,setUser]=useState();
  // var User = useSelector((state) => (state.currentUserReducer));
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
  // }, [dispatch]);

  // var User = ''

  // const isNavigated = JSON.parse(localStorage.getItem('Profile'));
  // if (isNavigated === null) {
  //   User = null
  //   console.log('0');

  // }
  // else {
  //   User = 1
  //   console.log('1');

  // }
  const Navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    Navigate("/");
    dispatch(setCurrentUser(null));
  };
  useEffect(() => {
    // const token = User?.token
    // if (token) {
    //   const decodedToken = decode(token)
    //   if (decodedToken.exp * 1000 < new Date().getTime()) {
    //     handleLogout()
    //   }
    // }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);

  // [dispatch,handleLogout]

  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg bg-body-tertiary main-nav">
        <div class="container-fluid">
          {/* <a href="#" class="navbar-brand">Navbar</a> */}
          <Link to="/" className="nav-logo nav-item">
            <img src={logo} alt="official logo"></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* class="nav-item" */}
              <li>
                {/* <a class="nav-link" aria-current="page" href="#">Home</a> */}
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
                  to="https://stackoverflow.co/"
                  target="_blank"
                  className="nav-btn nav-item"
                >
                  Products
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
                  My Projects
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
                      href="https://myportfolio-2023.web.app/"
                    >
                      My Portfolio
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="https://stackoverflow.co/teams"
                  target="_blank"
                  className="nav-btn nav-item"
                >
                  For Teams
                </Link>
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
              {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
              {/* <button class="btn btn-outline-success" type="submit" className="nav-links nav-btn nav-item" >Search</button> */}
            </form>
            {User === null ? (
              <>
                <Link to="/login" className="nav-links nav-btn nav-item">
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="nav-links nav-btn nav-item"
                  id="special-button"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <>
                <Avatar
                  backgroundColor="#009dff"
                  px="10px"
                  py="7px"
                  borderRadius="50%"
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
                <button
                  className="nav-links nav-btn nav-item"
                  onClick={handleLogout}
                  id="special-button"
                >
                  Log out
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
      {/* <nav className="main-nav">
        <div className="navbar">
          
          <Link to="/" className="nav-logo nav-item navbar-brand">
            <img src={logo} alt="official logo"></img>
          </Link>
          <Link to="https://stackoverflow.co/" target="_blank" className="nav-btn nav-item">
            About
          </Link>
          <Link to="https://stackoverflow.co/" target="_blank" className="nav-btn nav-item">
            Products
          </Link>
          <Link to="https://stackoverflow.co/teams" target="_blank" className="nav-btn nav-item">
            For Teams
          </Link>
          <form id="searchform">
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
            />
          </form>

          {User === null ?
            <>
              <Link to="/login" className="nav-links nav-btn nav-item">
                Log in
              </Link>
              <Link to="/signup" className="nav-links nav-btn nav-item">
                Sign up
              </Link>
            </>
            :
            <>
              <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="7px"
                borderRadius="50%"
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
              <button className="nav-links nav-btn nav-item" onClick={handleLogout}>Log out</button>
            </>
          }
        </div>
      </nav> */}
    </div>
  );
};

export default Navbar;

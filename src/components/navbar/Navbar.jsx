//importing packages
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../actions/auth";
import decode from "jwt-decode";
import Dropdown from "react-bootstrap/Dropdown";

//importing style
import logo from "../../assets/otiva.png";
import searchicon from "../../assets/searchicon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

//importing components
import Avatar from "./Avatar";
import { setCurrentUser } from "../../actions/currentUser";
import Button from "react-bootstrap/esm/Button";

//main function goes here
const Navbar = (src) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  var User = useSelector((state) => state.fetch_current_userReducer);
  const [email, setEmail] = useState(User?.result?.email);
  var currentplan = User?.result?.plan;
  var stat = User?.status;
  var premiumcontent = "Get Premium";
  var srcofPic = src;
  if (currentplan === "Free" || currentplan === "NULL") {
    premiumcontent = "Get Premium";
  } else if (currentplan === "Silver" && stat === "no") {
    premiumcontent = "Upgrade";
  } else if (currentplan === "Gold" && stat === "no") {
    premiumcontent = "!";
  }
  const questionsList = useSelector((state) => state.questionReducer);
  const handleLogout = (e) => {
    e.preventDefault();
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
    if (existingtoken) {
      const decodedToken = decode(existingtoken);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch(setCurrentUser(null));
      }
    }
  }, [dispatch]);
  // <script async src="https://cse.google.com/cse.js?cx=e532ff84caaf848b5">
  // </script>

  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-md fixed-top bg-body-tertiary">
        <div className="container-fluid myfavnav">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="official logo" width="150px"></img>
          </Link>
          <Dropdown
            className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around "
            id="drops"
            type="Button"
            // data-bs-toggle="collapse"
            // data-bs-target="#navbarSupportedContent"
            // aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Dropdown.Toggle
              style={{
                backgroundColor: "#faf7f7",
                border: "none",
                color: "white",
              }}
            >
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: "#ff7003", width: "20px", padding: "0" }}
              />
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: "410px" }}>
              <Dropdown.Item href="https://gi009.000webhostapp.com/">
                <Link to="/About" className="nav-btn nav-item">
                  <b>About</b>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item href="">
                <Link to="/pricing" className="nav-btn nav-item">
                  <b>Pricing</b>
                </Link>
              </Dropdown.Item>
              <ul type="none">
                <li>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="info"
                      id="dropdown-basic"
                      style={{
                        backgroundColor: "white",
                        border: "none",
                        color: "white",
                      }}
                    >
                      <span
                        style={{
                          color: "black",
                          fontSize: "13px",
                          fontWeight: "600",
                          marginLeft: "-10px",
                        }}
                      >
                        <b>Project</b>
                      </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        <a
                          className="dropdown-item"
                          href="https://myportfolio-pink-eta.vercel.app/"
                        >
                          My Portfolio
                        </a>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        {" "}
                        <a
                          className="dropdown-item"
                          href="https://gi-qnx4.onrender.com/"
                        >
                          News Letter Subscription
                        </a>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        <a className="dropdown-item" href="">
                          Otiva Educart
                        </a>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        <a
                          className="dropdown-item"
                          href="https://kaustubhpathak-tech.github.io/simon_game/"
                        >
                          Simon Game !
                        </a>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        <a
                          className="dropdown-item"
                          href="https://kaustubhpathak-tech.github.io/tindog-project/"
                        >
                          Tindog
                        </a>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        <a
                          className="dropdown-item"
                          href="https://easy-e-life.web.app/"
                        >
                          Easy-e-Life
                        </a>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        <a
                          className="dropdown-item"
                          href="https://sites.google.com/view/gayatrirubberindustries-vasai/home?pli=1"
                        >
                          Gayatri Industries Vasai
                        </a>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
              <form
                className="d-flex"
                role="search"
                id="searchform"
                style={{ marginLeft: "24px", width: "50%" }}
              >
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
                  className="form-control me-2"
                  autoComplete="off"
                />
              </form>
              <br />
              <Dropdown.Item href="">
                {User === null ? (
                  <>
                    <Link
                      to="/login"
                      className="nav-links nav-btn nav-item fonting"
                      style={{ marginLeft: "21px" }}
                    >
                      Log in
                    </Link>
                    <Link
                      to="/signup"
                      className="nav-links nav-btn nav-item fonting"
                      id="special-button"
                      style={{
                        marginLeft: "0px",
                        padding: "8px 14px 7px 14px",
                      }}
                    >
                      Sign up
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="avatar" style={{ textAlign: "center" }}>
                      <Avatar
                        backgroundColor="#009dff"
                        px="55px"
                        py="7px"
                        borderRadius="5px"
                        color="white"
                      >
                        <Link
                          to={`/users/${User?.result?._id}`}
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          {User?.result?.name.charAt(0).toUpperCase()}
                        </Link>
                      </Avatar>
                    </div>
                    {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                    <Link
                      className="nav-links nav-btn nav-item fonting"
                      onClick={handleLogout}
                      id="special-button"
                      style={{
                        marginLeft: "20px",
                        padding: "3px 30px 7px 34px",
                      }}
                    >
                      Log out
                    </Link>
                  </>
                )}
              </Dropdown.Item>

              <Dropdown.Item
                href="#/action-3"
                style={{ marginBottom: "15px", marginLeft: "12px" }}
              >
                {currentplan === "Gold" ? (
                  <></>
                ) : (
                  <>
                    <Link
                      to="/pricing"
                      className="nav-links nav-btn nav-item fonting"
                      id="special-button"
                      style={{
                        marginLeft: "8px",
                        padding: "5px 30px 7px 30px",
                      }}
                    >
                      {premiumcontent}
                    </Link>
                  </>
                )}
              </Dropdown.Item>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                <Link to="/About" className="nav-btn nav-item">
                  <b>About</b>
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="nav-btn nav-item">
                  <b>Pricing</b>
                </Link>
              </li>
              <li className="dropdown">
                <a
                  className="nav-link dropdown-toggle nav-item nav-btn"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>Projects</b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://myportfolio-pink-eta.vercel.app/"
                    >
                      My Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://gi-qnx4.onrender.com/"
                    >
                      News Letter Subscription
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Otiva Educart
                    </a>
                  </li>

                  <li>
                    <a
                      className="dropdown-item"
                      href="https://kaustubhpathak-tech.github.io/simon_game/"
                    >
                      Simon Game !
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://kaustubhpathak-tech.github.io/tindog-project/"
                    >
                      Tindog
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://easy-e-life.web.app/"
                    >
                      Easy-e-Life
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://sites.google.com/view/gayatrirubberindustries-vasai/home?pli=1"
                    >
                      Gayatri Industries Vasai
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" id="searchform">
              <img
                src={searchicon}
                alt="searchicon"
                width="28px"
                className="searchicon"
              />

              <input
                type="text"
                name="searchKeyword"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                id="searchinput"
                placeholder="Search..."
                autoComplete="off"
              />
            </form>
            {searchKeyword && (
              <>
                <div className="searchResult">
                  {questionsList.data
                    .filter((city) =>
                      city.questionTitle
                        .toLowerCase()
                        .includes(searchKeyword.toLocaleLowerCase())
                    )
                    .map(
                      (city, index) =>
                        index < 5 && (
                          <Link
                            to={`/Questions/${city._id}`}
                            onClick={() => {
                              setSearchKeyword("");
                            }}
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <div className="specialSearchResult">
                              <img src={searchicon} width="15px" /> &nbsp;&nbsp;{" "}
                              {city.questionTitle}
                            </div>
                          </Link>
                        )
                    )}
                </div>
                {/* <div
                  class="modal fade"
                  id="formModel3"
                  tabindex="-1"
                  aria-labelledby="formModelLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Enquiry Form
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div class="row">
                          <div class="col-md-6 popup_form"></div>
                          <div class="col-md-6 form_img">
                            <img
                              src="https://cdn3d.iconscout.com/3d/premium/thumb/registration-form-5228737-4379744.png?f=webp"
                              alt="form_dummy"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#magneticGrilModel"
                data-bs-dismiss="modal" data-bs-target="#formModel">Go to Details</button>
            </div>
                    </div>
                  </div>
                </div> */}
              </>
            )}
            &nbsp;&nbsp;
            {User === null ? (
              <>
                <Link
                  to="/login"
                  className="nav-links nav-btn nav-item fonting"
                >
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
                <Link
                  to={`/users/${User?.result?._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <img
                    src={`${User?.result?.avatar}`}
                    alt=""
                    style={{
                      borderRadius: "50%",
                      width: "37px",
                      height: "37px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 54px 55px,rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                    }}
                  />
                </Link>
                {/* <Avatar
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
                </Avatar> */}
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                <Link
                  className="nav-links nav-btn nav-item fonting"
                  onClick={handleLogout}
                  id="special-button"
                >
                  Log out
                </Link>
              </>
            )}
            {currentplan === "Gold" ? (
              <></>
            ) : (
              <>
                <Link
                  to="/pricing"
                  className="nav-links nav-btn nav-item fonting"
                  id="special-button"
                >
                  {premiumcontent}
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

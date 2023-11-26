//importing packages
import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
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
import {
  faBars,
  faMicrophone,
  faStop,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

//importing components
import Avatar from "./Avatar";
import { setCurrentUser } from "../../actions/currentUser";
import Button from "react-bootstrap/esm/Button";
import Popup from "../Popup/Popup";

//main function goes here
const Navbar = (src) => {
  //speech recognition
  var [listen, setListen] = useState(false);
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });
  var {
    transcript,
    browserSupportsSpeechRecognition,
    resetTranscript,
  } = useSpeechRecognition();

  // const resetTranscript = () => SpeechRecognition.stopListening();

  transcript && console.log(transcript);

  const [searchKeyword, setSearchKeyword] = useState("");
  console.log(searchKeyword);
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
              <Dropdown.Item href="">
                {User === null ? (
                  <div className="accounts">
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
                      style={{
                        marginLeft: "0px",
                        padding: "8px 14px 7px 14px",
                      }}
                    >
                      Sign up
                    </Link>
                  </div>
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
                    <Link
                      className="nav-links nav-btn nav-item fonting"
                      onClick={handleLogout}
                      id="special-button"
                      style={{
                        marginBottom: "30px",
                        marginLeft: "20px",
                        padding: "5px 30px 6px 30px",
                      }}
                    >
                      Log out
                    </Link>
                  </>
                )}
              </Dropdown.Item>
              <br />
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
                        padding: "5px 34px 7px 34px",
                      }}
                    >
                      {premiumcontent}
                    </Link>
                  </>
                )}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

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
            <form
              className="d-flex"
              role="search"
              id="searchform"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <img
                src={searchicon}
                alt="searchicon"
                width="28px"
                className="searchicon"
              />

              <input
                type="text"
                name="searchKeyword"
                value={searchKeyword || transcript}
                onChange={(e) => {
                  setSearchKeyword(e.target.value);
                  if (e.target.value.length === 0) {
                    resetTranscript();
                  }
                }}
                placeholder="Search ... "
                autoComplete="off"
              />

              <div className="voiceBtn">
                {listen ? (
                  <>
                    <button
                      onClick={() => {
                        SpeechRecognition.stopListening();
                        setListen(false);
                      }}
                      data-toggle="tooltip"
                      title="Stop Listening"
                      className="voiceBtn"
                    >
                      <FontAwesomeIcon icon={faStop}></FontAwesomeIcon>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        startListening();
                        setListen(true);
                      }}
                      data-toggle="tooltip"
                      title="Search by voice"
                      className="voiceBtn"
                    >
                      <FontAwesomeIcon icon={faMicrophone}></FontAwesomeIcon>
                    </button>
                  </>
                )}
              </div>
            </form>
            <div>
              <Popup
                trigger={listen}
                setTrigger={setListen}
                onClose={listen}
              ></Popup>
            </div>
            {(searchKeyword || transcript) && (
              <>
                <div className="searchResult">
                  {questionsList.data
                    .filter((city) =>
                      city.questionTitle
                        .toLowerCase()
                        .includes(
                          searchKeyword.toLocaleLowerCase() ||
                            transcript.toLocaleLowerCase()
                        )
                    )
                    .map(
                      (city, index) =>
                        index < 5 && (
                          <Link
                            to={`/Questions/${city._id}`}
                            onClick={() => {
                              setSearchKeyword("");
                              resetTranscript();
                            }}
                            style={{
                              textDecoration: "none",
                              color: "inherit",
                            }}
                          >
                            <div className="specialSearchResult">
                              <img src={searchicon} width="15px" /> &nbsp;&nbsp;{" "}
                              {city.questionTitle}
                            </div>
                          </Link>
                        )
                    )}
                </div>
                {questionsList.data.filter((city) =>
                  city.questionTitle
                    .toLowerCase()
                    .includes(
                      searchKeyword.toLocaleLowerCase() ||
                        transcript.toLocaleLowerCase()
                    )
                ).length === 0 ? (
                  <>
                    <div className="searchResult">No Results Found</div>
                  </>
                ) : (
                  <></>
                )}
              </>
            )}
            &nbsp;&nbsp;
            {User === null ? (
              <div>
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
              </div>
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

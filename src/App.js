//eshint version:6

//importing packages
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
//importing styles

import "./custom.scss";
import Navbar from "./components/navbar/Navbar";
import "./components/navbar/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import india from "./assets/india.png";
import { useNavigate } from "react-router-dom";
//importing pages
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import User from "./Pages/User/User";
import Tags from "./Pages/Tags/Tags";
import Questions from "./Pages/Questions/Questions";
import AskQuestion from "./Pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./Pages/Questions/DisplayQuestion";
import { fetchAllquestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";
import UserProfile from "./Pages/UserProfile/UserProfile";
import Forgotpassword from "./Pages/ForgotPassword/Forgotpassword";
import Chat from "./components/Chat";
import VerifyOTP from "./Pages/VerifyOTP/VerifyOTP";
import Paymentsuccess from "./Pages/Payment/Paymentsuccess";
import Pricing from "./Pages/Pricing/Pricing";
import Popup from "./components/Popup/Popup";
import BounceLoader from "react-spinners/BounceLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; //main function starts here
import { setCurrentUser } from "./actions/currentUser";
import ScrolltoTop from "./components/ScrolltoTop";
function App() {
  const [loading, setLoading] = useState(false);
  var User = useSelector((state) => (state.fetch_current_userReducer));
 

  
  // var stat = payment?.status;
  // var expiry = decodedToken.exp*1000;
  // console.log(expiry);
  // var diff = expiry - new Date().getTime();
  function refresh() {
    window.location.reload(true);
    localStorage.clear();
  }
  useEffect(() => {
    setTimeout(() => {
      setDsa(true);
    }, 0);
    setTimeout(() => {
      setDsa(false);
    }, 9000);
    setLoading(true);
    document.addEventListener("mousedown", () => {
      setDsa(false);
    });
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);


  // if (isNaN(expiry)) {
  // } else {
  //   setInterval(refresh, diff);
  // }

  const [dsa, setDsa] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllquestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);
  function handleCallbackResponse(res) {
    var googleuser=jwt_decode(res.credential);
    console.log(googleuser);
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "602166184134-sj45i02o9tsjsc05h931q4mf0q1ogpnf.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signIndiv"), {
      theme: "outline",
      size: "large",
    });
    // google.accounts.id.prompt();
  }, []);
  return (

    <div className="App">
      
      {loading ? (
        <>
          <div className="preloader portrait">
            <BounceLoader
              className="App"
              color={"#f59607"}
              loading={loading}
              // cssOverride={override}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </>
      ) : (
        <>
        <div id="signIndiv" style={{marginTop:"20vh"}}></div>
          <div id="landa">
            <img
              src="https://storage.googleapis.com/support-forums-api/attachment/thread-54903774-5712120669965295764.jpg"
              width="100%"
              height="310px"
            ></img>
          </div>
          
          <div className="portrait">
          
            <BrowserRouter>
              {/* This is navigation bar */}

              <Popup trigger={dsa} setTrigger={setDsa} onClose={dsa}>
                <h5 style={{ textAlign: "center" }}>
                  {" "}
                  <blink>
                    <div style={{ color: "red", textAlign: "center" }}>
                      <b>ALERT !</b>{" "}
                    </div>
                  </blink>{" "}
                  <br />
                  &nbsp;&nbsp;All Payments are in{" "}
                  <b style={{ color: "red" }}>Test Mode</b>
                </h5>
                <br />
                <h5 style={{ textAlign: "center" }}>
                  Use these Card Details ⬇️
                </h5>
                <p style={{ position: "absolute", marginLeft: "16%" }}>
                  Card No : 4111 1111 1111 1111
                </p>
                <br />
                <p style={{ position: "absolute", marginLeft: "16%" }}>
                  Expiry : Any future date
                </p>
                <br />
                <p style={{ position: "absolute", marginLeft: "16%" }}>
                  Card Holder's Name : Any Name
                </p>
                <br />
                <p style={{ position: "absolute", marginLeft: "16%" }}>
                  CVV : Any number
                </p>
                <br />
                <br />
                <h5 style={{ textAlign: "center" }}>
                  Use these UPI Details ⬇️
                </h5>
                <p style={{ position: "absolute", marginLeft: "16%" }}>
                  UPI id: success@razorpay
                </p>
                <br />
              </Popup>

              <Navbar />
              <ScrolltoTop />
              <Routes>
                {/* This is Home Page Route */}
                <Route path="/" element={<Home />} />

                {/* This is Login Page Route */}
                <Route path="/login" element={<Login />}></Route>
                <Route
                  path="/forgotpassword"
                  element={<Forgotpassword />}
                ></Route>
                {/* This is Signup Page Route */}
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/Pricing" element={<Pricing />}></Route>
                <Route
                  path="/paymentsuccess"
                  element={<Paymentsuccess />}
                ></Route>
                <Route path="/verify" element={<VerifyOTP />}></Route>
                {/* This is User Page Route */}
                <Route path="/users" element={<User />}></Route>
                <Route path="/users/:id" element={<UserProfile />}></Route>
                {/*This is Question Page Route*/}
                <Route path="/Questions" element={<Questions />}></Route>
                {/*This is Ask Question Page Route*/}
                <Route path="/AskQuestions" element={<AskQuestion />}></Route>
                {/*This is Ask Question Page Route*/}
                <Route
                  path="/Questions/:id"
                  element={<DisplayQuestion />}
                ></Route>
                {/*This is Tags Page Route*/}
                <Route path="/tags" element={<Tags />}></Route>
              </Routes>
              
              <Chat />
              <div className="footer">
                <div className="formalities">
                  <span className="privacy">
                    <a
                      href="https://www.freeprivacypolicy.com/live/38db0dd9-fbb6-4061-9c25-1592ab0c2b71"
                      target="_blank"
                    >
                      Privacy Policy
                    </a>
                  </span>
                  <span className="privacy">
                    <a
                      href="https://www.termsandconditionsgenerator.com/live.php?token=tYqQECMeMDgxJcCqTI7Xp3663TywnoK0"
                      target="_blank"
                    >
                      Terms and Conditions
                    </a>
                  </span>
                  <span className="privacy">
                    <a
                      href="https://www.freeprivacypolicy.com/live/2c6571f4-af7f-4e1b-bc44-d892c53f4b46"
                      target="_blank"
                    >
                      Return, Refund and Cancellation Policy
                    </a>
                  </span>
                  <span className="privacy">
                    <a
                      href="https://v3056369-qgvho6pwhg5z.demo077.volusion.com/"
                      target="_blank"
                    >
                      Contact us
                    </a>
                  </span>
                  <span className="privacy">
                    <a href="https://gi009.000webhostapp.com/" target="_blank">
                      About us
                    </a>
                  </span>
                </div>
                <div className="footer-1">
                  
                  <p>
                    Made with{" "}
                    <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />{" "}
                    in <img src={india} width="18" alt="I Love my India" />{" "}
                    &nbsp;&nbsp;&nbsp;All rights reserved. &copy;{" "}
                    <a
                      href="https://www.linkedin.com/in/kaustubh-pathak-293116198/"
                      target="_blank"
                      id="me"
                    >
                      Kaustubh Pathak
                    </a>
                  </p>
                </div>
              </div>
              {/* {
                (window.onbeforeunload = function() {
                  localStorage.clear();
                })
              } */}
            </BrowserRouter>
          </div>
        </>
      )}
      <ToastContainer limit={1} />
    </div>
  );
}

export default App;

//main react frontend server ended

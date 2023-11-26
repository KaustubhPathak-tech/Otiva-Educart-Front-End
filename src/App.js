//importing React hooks.

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

//importing styles
import "./custom.scss";
import "./components/navbar/Navbar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import india from "./assets/india.png";

//importing pages and components
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import UserPage from "./Pages/User/UserPage";
import Tags from "./Pages/Tags/Tags";
import Questions from "./Pages/Questions/Questions";
import AskQuestion from "./Pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./Pages/Questions/DisplayQuestion";
import { fetchAllquestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";
import { glogin } from "./actions/auth";
import Navbar from "./components/navbar/Navbar";
import UserProfile from "./Pages/UserProfile/UserProfile";
import Forgotpassword from "./Pages/ForgotPassword/Forgotpassword";
import VerifyOTP from "./Pages/VerifyOTP/VerifyOTP";
import Paymentsuccess from "./Pages/Payment/Paymentsuccess";
import Pricing from "./Pages/Pricing/Pricing";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Popup from "./components/Popup/Popup";
import BounceLoader from "react-spinners/BounceLoader";
import { setCurrentUser } from "./actions/currentUser";
import ScrolltoTop from "./components/ScrolltoTop";

//main function starts here
function App() {
  const [loading, setLoading] = useState(false);
  function refresh() {
    window.location.reload(true);
    localStorage.clear();
  }

  useEffect(() => {
    setTimeout(() => {
      setPopup(true);
    }, 0);
    setTimeout(() => {
      setPopup(false);
    }, 9000);
    document.addEventListener("mousedown", () => {
      setPopup(false);
    });

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  // if (isNaN(expiry)) {
  // } else {
  //   setInterval(refresh, diff);
  // }
  const [pics, setPics] = useState("");
  const [popup, setPopup] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllquestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);
  function handleCallbackResponse(res) {
    var googleuser = jwt_decode(res.credential);

    let name = googleuser?.name;
    let email = googleuser?.email;
    let pic = googleuser?.picture;
    setPics(pic);
    let password = googleuser?.sub;
    dispatch(glogin({ name, email, pic, password }));
  }
  var User = useSelector((state) => state.fetch_current_userReducer);
  useEffect(() => {
    /* global google */
    setTimeout(() => {
      google.accounts.id.initialize({
        client_id:
          "602166184134-sj45i02o9tsjsc05h931q4mf0q1ogpnf.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      });

      if (User === null) {
        google.accounts.id.prompt();
      } else {
        google.accounts.id.cancel();
      }
    }, 3000);
  }, [User]);
  return (
    <div className="App">
      {loading ? (
        <>
          {/* preloader */}
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
          {/* landscape mode content */}
          <div id="landscape">
            <img
              src="https://storage.googleapis.com/support-forums-api/attachment/thread-54903774-5712120669965295764.jpg"
              width="100%"
              height="310px"
            ></img>
          </div>
          {/* portrait mode content */}
          <div className="portrait">
            <BrowserRouter>
              {/* This is Welcome Popup */}
              {/* <Popup trigger={popup} setTrigger={setPopup} onClose={popup}>
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
              </Popup> */}

              {/* This is navigation bar */}
              <Navbar src={pics} />
              <ScrolltoTop />

              {/* These are different Pages of website. */}
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />}></Route>

                <Route
                  path="/forgotpassword"
                  element={<Forgotpassword />}
                ></Route>

                <Route path="/signup" element={<Signup />}></Route>

                <Route path="/Pricing" element={<Pricing />}></Route>

                <Route
                  path="/paymentsuccess"
                  element={<Paymentsuccess />}
                ></Route>

                <Route path="/verify" element={<VerifyOTP />}></Route>

                <Route path="/users" element={<UserPage />}></Route>

                <Route path="/users/:id" element={<UserProfile />}></Route>

                <Route path="/Questions" element={<Questions />}></Route>

                <Route path="/AskQuestions" element={<AskQuestion />}></Route>

                <Route
                  path="/Questions/:id"
                  element={<DisplayQuestion />}
                ></Route>

                <Route path="/tags" element={<Tags />}></Route>
                <Route path="/About" element={<Aboutus />}></Route>
              </Routes>

              {/* chatbot */}

              {/* Footer starts here */}
              {/* <div className="mobileFooter">
                <div
                  className="mobile-footer-content"
                  style={{ fontSize: "9px" }}
                >
                  <a
                    href="https://merchant.razorpay.com/policy/LQDvDu1f8iCWFD/privacy" //https://www.freeprivacypolicy.com/live/38db0dd9-fbb6-4061-9c25-1592ab0c2b71
                  >
                    Privacy Policy
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href="https://merchant.razorpay.com/policy/LQDvDu1f8iCWFD/terms" //https://www.termsandconditionsgenerator.com/live.php?token=tYqQECMeMDgxJcCqTI7Xp3663TywnoK0
                  >
                    Terms and Conditions
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href="https://merchant.razorpay.com/policy/LQDvDu1f8iCWFD/refund" //https://www.freeprivacypolicy.com/live/2c6571f4-af7f-4e1b-bc44-d892c53f4b46
                  >
                    Refund and Cancellation Policy
                  </a>
                  &nbsp;&nbsp;
                </div>
                <div
                  className="ending"
                  style={{
                    fontSize: "8px",
                    textAlign: "center",
                    marginBottom: "0px",
                    paddingBottom: "0px",
                  }}
                >
                  <a
                    href="https://merchant.razorpay.com/policy/LQDvDu1f8iCWFD/contact_us" //https://v3056369-qgvho6pwhg5z.demo077.volusion.com/
                  >
                    Contact us
                  </a>
                  &nbsp;&nbsp;
                  <Link to="/About"> About us</Link>
                  <br />
                  <p style={{ fontSize: "8px" }}>
                    Made with{" "}
                    <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />{" "}
                    in <img src={india} width="18" alt="I Love my India" />{" "}
                    &nbsp;&nbsp;&nbsp;All rights reserved. &copy;{" "}
                    <a
                      href="https://www.linkedin.com/in/kaustubh-pathak-293116198/"
                      id="me"
                    >
                      Kaustubh Pathak
                    </a>
                  </p>
                </div>
              </div> */}
              <div className="footer">
                <div className="formalities">
                  <span className="privacy">
                    <a
                      href="https://merchant.razorpay.com/policy/LQDvDu1f8iCWFD/privacy" target="_blank"//https://www.freeprivacypolicy.com/live/38db0dd9-fbb6-4061-9c25-1592ab0c2b71
                    >
                      Privacy Policy
                    </a>
                  </span>
                  <span className="privacy">
                    <a
                      href="https://merchant.razorpay.com/policy/LQDvDu1f8iCWFD/terms" target="_blank" //https://www.termsandconditionsgenerator.com/live.php?token=tYqQECMeMDgxJcCqTI7Xp3663TywnoK0
                    >
                      Terms and Conditions
                    </a>
                  </span>
                  <span className="privacy">
                    <a
                      href="https://merchant.razorpay.com/policy/LQDvDu1f8iCWFD/refund" target="_blank" //https://www.freeprivacypolicy.com/live/2c6571f4-af7f-4e1b-bc44-d892c53f4b46
                    >
                      Refund and Cancellation Policy
                    </a>
                  </span>
                  <span className="privacy">
                    <a
                      href="https://merchant.razorpay.com/policy/LQDvDu1f8iCWFD/contact_us" target="_blank" //https://v3056369-qgvho6pwhg5z.demo077.volusion.com/
                    >
                      Contact us
                    </a>
                  </span>
                  <span className="privacy">
                    <Link to="/About"> About us</Link>
                    {/* <a href="" target="_blank"> 
                    //https://gi009.000webhostapp.com
                      About us
                    </a> */}
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

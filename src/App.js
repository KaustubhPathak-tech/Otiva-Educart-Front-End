//eshint version:6

//importing packages
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";//main function starts here
import { setCurrentUser } from "./actions/currentUser";
function App() {
  var payment = useSelector((state) => state.fetch_current_userReducer);
  var data = payment?.time;
  var stat=payment?.status;
  var expiry = data + 3600000;
  var diff = expiry - Date.now();
  function refresh() {
    window.location.reload(true);
    localStorage.clear();
  }
  
  if(isNaN(expiry)){
    
    
  }
  else{
    setInterval(refresh,diff);
    if(stat==="yes"){
      
    }
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllquestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        {/* This is navigation bar */}

        <Navbar />

        <Routes>
          {/* This is Home Page Route */}
          <Route path="/" element={<Home />} />

          {/* This is Login Page Route */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgotpassword" element={<Forgotpassword />}></Route>
          {/* This is Signup Page Route */}
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/Pricing" element={<Pricing />}></Route>
          <Route path="/paymentsuccess" element={<Paymentsuccess />}></Route>
          <Route path="/verify" element={<VerifyOTP />}></Route>
          {/* This is User Page Route */}
          <Route path="/users" element={<User />}></Route>
          <Route path="/users/:id" element={<UserProfile />}></Route>
          {/*This is Question Page Route*/}
          <Route path="/Questions" element={<Questions />}></Route>
          {/*This is Ask Question Page Route*/}
          <Route path="/AskQuestions" element={<AskQuestion />}></Route>
          {/*This is Ask Question Page Route*/}
          <Route path="/Questions/:id" element={<DisplayQuestion />}></Route>
          {/*This is Tags Page Route*/}
          <Route path="/tags" element={<Tags />}></Route>
        </Routes>

        <Chat />
        <div className="footer">
          <div className="formalities">
            <a
              href="https://496gf0lz.r.ap-south-1.awstrack.me/L0/https:%2F%2Fmerchant.razorpay.com%2Fpolicy%2FLQDvDu1f8iCWFD%2Fprivacy/1/01090186d0ba31b6-f4e06371-3dd7-417c-90c1-129879a5a6ac-000000/wn1t4whDKSF_FuHO0ungabO6gEM=93"
              target="_blank"
            >
              Privacy Policy
            </a>
            <a
              href="https://496gf0lz.r.ap-south-1.awstrack.me/L0/https:%2F%2Fmerchant.razorpay.com%2Fpolicy%2FLQDvDu1f8iCWFD%2Fterms/1/01090186d0bd4667-e55c186c-c108-4cb5-a968-099269f698ef-000000/7xGyt9XN2Qr1rD0CE-vGVRYM2Ms=93"
              target="_blank"
            >
              Terms and Conditions
            </a>
            <a
              href="https://496gf0lz.r.ap-south-1.awstrack.me/L0/https:%2F%2Fmerchant.razorpay.com%2Fpolicy%2FLQDvDu1f8iCWFD%2Frefund/1/01090186d0be82ec-accfa903-e2d9-4402-893d-eda6d9eea843-000000/isEom1rGgI7MDVuMSNFLXc9mXaY=93"
              target="_blank"
            >
              Cancellation and Refund Policy
            </a>
            <a
              href="https://496gf0lz.r.ap-south-1.awstrack.me/L0/https:%2F%2Fmerchant.razorpay.com%2Fpolicy%2FLQDvDu1f8iCWFD%2Fshipping/1/01090186d0bf637b-3c796adf-3ddc-42d6-85f0-ad429c259182-000000/LcGc_dDJtgpjdEBLko2dSp6oBrE=93"
              target="_blank"
            >
              Merchant Schemes
            </a>
            <a
              href="https://496gf0lz.r.ap-south-1.awstrack.me/L0/https:%2F%2Fmerchant.razorpay.com%2Fpolicy%2FLQDvDu1f8iCWFD%2Fcontact_us/1/01090186d0bfc1d2-92f534d7-eae4-473b-b7f6-876ff6e7b068-000000/TVaDzRjupxQ8n9vxg8htTZg3wO4=93"
              target="_blank"
            >
              Contact us
            </a>
          </div>
          <div className="footer-1">
            <p>
              Made with{" "}
              <FontAwesomeIcon icon={faHeart} style={{ color: "white" }} /> in{" "}
              <img src={india} width="18" alt="I Love my India" />{" "}
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
        
        
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;

//main react frontend server ended

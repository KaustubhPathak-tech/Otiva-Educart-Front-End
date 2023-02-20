import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './custom.scss';

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Navbar from "./components/navbar/Navbar";
import "./components/navbar/Navbar.css";

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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import india from "./assets/india.png";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllquestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <BrowserRouter>
      {/* This is navigation bar */}
      {alert(
        "The Web-site may Perform slowly due to slow server speed.Kindly wait some time after pressing any key like login, signup, ask question, edit profile..."
      )}
      <Navbar />

      <Routes>
        {/* This is Home Page Route */}
        <Route path="/" element={<Home />} />

        {/* This is Login Page Route */}
        <Route path="/login" element={<Login />}></Route>

        {/* This is Signup Page Route */}
        <Route path="/signup" element={<Signup />}></Route>

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
      <div className="footer">
        <div className="footer-1">
          <p>
            Made with{" "}
            <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} /> in{" "}
            <img src={india} width="18" alt="I Love my India" />
          </p>
        </div>
        <div className="footer-2">
          &copy;{" "}
          <a href="https://www.linkedin.com/in/kaustubh-pathak-293116198/">
            Kaustubh Pathak
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;

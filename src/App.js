import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// importing from assets and css
import "./custom.scss";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// importing navbar
import Navbar from "./components/navbar/Navbar";
import "./components/navbar/Navbar.css";
import Footer from "./components/Footer/Footer";
// importing pages
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
//main function starts
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllquestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <BrowserRouter>
      {/* This is navigation bar */}

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
      <Footer />
    </BrowserRouter>
  );
}

//exporting main function
export default App;

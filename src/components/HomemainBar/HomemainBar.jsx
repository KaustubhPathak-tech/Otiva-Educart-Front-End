import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./HomemainBar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import QuestionList from "./QuestionList";

const Homemainbar = () => {
  const location = useLocation();
  var user = useSelector((state) => state.fetch_current_userReducer);
  const navigate = useNavigate();

  const questionsList = useSelector((state) => state.questionReducer);
  const permit = user?.result?.permi;
  const askedq = user?.result?.noOfQuestionperday;

  const redirect = () => {
    if (user === null) {
      toast.error("Please login to  ask question", { position: "top-center" });
      <ToastContainer />;
    } else {
      if (permit > askedq) {
        navigate("/AskQuestions");
      } else {
        toast.error("Daily Limit Exceeded !", { position: "top-center" });
        <ToastContainer />;
      }
    }
  };
  return (
    <div className="home-main-bar">
      <div className="intro-container">
        {location.pathname === "/" ? (
          <h3>Top Questions</h3>
        ) : (
          <h3>All Questions</h3>
        )}
        <button className="ask-btn" onClick={redirect}>
          Ask Question
        </button>

        {/* <Link to='/AskQuestions' className='ask-btn' onClick={authenticate}>Ask  Question</Link> */}
      </div>

      <div>
        {questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {/* <p id="noOfQuestions">{questionsList.data.length} Questions </p> */}
            <QuestionList questionsList={questionsList.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default Homemainbar;

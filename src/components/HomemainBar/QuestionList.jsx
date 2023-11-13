import React from "react";
import "./HomemainBar.css";
import Question from "./Question";
import { Link } from "react-router-dom";

const QuestionList = ({ questionsList }) => {
  return (
    <>
      {questionsList.map((question) => (
        <Link to={`/Questions/${question._id}`} className="question-title-link">
          <Question question={question} key={question._id} />
        </Link>
      ))}
    </>
  );
};

export default QuestionList;

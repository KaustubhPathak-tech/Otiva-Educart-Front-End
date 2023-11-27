// src/components/StackExchangeComponent.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LeftsideBar from "../../components/LeftsideBar/LeftsideBar";
import StackQuestion from "./StackQuestion";
import "../../components/HomemainBar/HomemainBar.css";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch } from "react-redux";

const StackExchangeComponent = () => {
  const [questions, setQuestions] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://stack-overflow-server.vercel.app/api/stackexchange"  //
        );
        setQuestions(response.data.items);
        dispatch({ type: "STACK_EXCHANGE", payload: response.data.items });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="homePage">
      <div className="home-container-1">
        <LeftsideBar />
      </div>
      <div className="home-container-2" style={{ display: "block" }}>
        {questions.length === 0 ? (
          <div className="spinner_exchange">
            <Spinner animation="border" variant="warning" />
          </div>
        ) : (
          <>
            <div className="headimgs">
              <h4>Stack Exchange Questions</h4>
            </div>
            <div className="exchangehumain">
              <ul>
                {questions.map((question) => (
                  <a href={question.link} target="_blank" className="question-title-link">
                    <StackQuestion
                      question={question}
                      key={question.question_id}
                    />
                  </a>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StackExchangeComponent;

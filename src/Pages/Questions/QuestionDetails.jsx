import React, { useState } from "react";
import moment from 'moment'
import copy from 'copy-to-clipboard'
import { useSelector, useDispatch } from 'react-redux'
import Avatar from "../../components/navbar/Avatar";
import DisplayAnswer from "./DisplayAnswer";
import "./Questions.css";
import upvote from "../../assets/sort-up.svg";
import downvote from "../../assets/sort-down.svg";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { deleteQuestion, postAnswer, voteQuestion } from "../../actions/question";
const QuestionDetails = () => {
  const { id } = useParams();
  const questionsList = useSelector(state => state.questionReducer)
  console.log(questionsList)
  // var questionsList = [
  //   {
  //     _id: "1",
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 120,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["java", "node js", "react js", "mongo db", "express js"],
  //     userPosted: "mano",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "kumar",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     _id: "2",
  //     upVotes: 4,
  //     downVotes: 2,
  //     noOfAnswers: 5,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "mano",
  //     askedOn: "jan 1",
  //     userId: 1,
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "kumar",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     _id: "3",
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 10,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "mano",
  //     askedOn: "jan 1",
  //     userId: 1,
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "kumar",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //   },
  // ];
  // questionsList=null
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const User = useSelector((state) => (state.fetch_current_userReducer))
  const [Answer, setAnswer] = useState('')
  const location = useLocation()
  const url = 'https://stack-0ver-flow-clone.netlify.app'        //to be updated further
  const handleShare = () => {
    copy(url + location.pathname)
    alert('Copied url : ' + url + location.pathname)
  }
  const hadlePostAns = (e, answerLength) => {
    e.preventDefault()
    if (User == null) {
      alert('Login or Signup to answer a question')
      Navigate('/signup')
    }
    else {
      if (Answer === '') {
        alert('Enter an Answer before Submitting')
      }
      else {
        dispatch(postAnswer({ id, noOfAnswer: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId: User?.result?._id }))
      }
    }

  }
  const handleDelete = () => {
    dispatch(deleteQuestion(id, Navigate))
  }

  const handleUpVote = () => {
    dispatch(voteQuestion(id, 'upVote', User.result._id))
  }
  const handleDownVote = () => {
    dispatch(voteQuestion(id, 'downVote', User.result._id))
  }
  return (
    <div className="question-details-page">
      {questionsList.data === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionsList.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className="questions-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img
                        src={upvote}
                        alt="uparrow"

                        width="18"
                        className="votes-icon" onClick={handleUpVote}
                      />
                      <p>{question.upVote.length - question.downVote.length}</p>
                      <img
                        src={downvote}
                        alt="downarrow"
                        width="18"

                        className="votes-icon" onClick={handleDownVote}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag} id="question-tag">
                            {tag}
                          </p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type="button" onClick={handleShare}>Share</button>
                          {
                            User?.result?._id === question?.userId &&
                            (<button type="button" onClick={handleDelete}>Delete</button>)
                          }
                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link
                            to={`/users/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar backgroundColor="orange" px="8px" py="5px">
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted} </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <hr />
                {question.noOfAnswer !== 0 && (
                  <section>
                    <h3>{question.noOfAnswer} Answers</h3>
                    <DisplayAnswer key={question._id} question={question} handleShare={handleShare} />
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form onSubmit={(e) => { hadlePostAns(e, question.answer.length) }}>
                    <textarea name="" id="" cols="30" rows="10" onChange={e => setAnswer(e.target.value)}></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                  <p>
                    Browse other Questions tagged
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags">
                        {tag}
                      </Link>
                    ))}
                    or
                    {
                      <Link
                        to="/AskQuestions"
                        style={{ textDecoration: "none", color: "#009dff" }}
                      >
                        &nbsp;Ask Your own question.
                      </Link>
                    }
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionDetails;

import React from 'react'


import {  useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './HomemainBar.css'
import QuestionList from './QuestionList'



const Homemainbar = () => {
  const location = useLocation()
  var user = useSelector((state) => (state.fetch_current_userReducer))
  const navigate = useNavigate();

  const questionsList = useSelector(state => state.questionReducer)
  console.log(questionsList)

  // var questionsList = [{
  //   _id: 1,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "node js", "react js", "mongo db", "express js"],
  //   userPosted: "mano",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: 'kumar',
  //     answeredOn: "jan 2",
  //     userId: 2,
  //   }]
  // }, {
  //   _id: 2,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 0,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["javascript", "R", "python"],
  //   userPosted: "mano",
  //   askedOn: "jan 1",
  //   userId: 1,
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: 'kumar',
  //     answeredOn: "jan 2",
  //     userId: 2,
  //   }]
  // }, {
  //   _id: 3,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 0,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["javascript", "R", "python"],
  //   userPosted: "mano",
  //   askedOn: "jan 1",
  //   userId: 1,
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: 'kumar',
  //     answeredOn: "jan 2",
  //     userId: 2,
  //   }]
  // }]
  // const redirect = () => {
  //   alert("Login or signup to ask a question"); navigate('/Login')
  // }
  // const authenticate =()=>{
  //   if(user===null){
  //     alert('Please Login or Signup to ask a Question ');

  //   }
  //   navigate('/login')
  // }
  const redirect = () => { user === null ? navigate('/login') : navigate('/AskQuestions') }

  return (
    <div>
      <div className='intro-container'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button className='ask-btn' onClick={redirect}>Ask Question</button>
        
        {/* <Link to='/AskQuestions' className='ask-btn' onClick={authenticate}>Ask  Question</Link> */}

      </div>

        

      <div>
        {
          questionsList.data === null ? <h1>Loading...</h1> :
            <>
              <p id="noOfQuestions">{questionsList.data.length} Questions </p>
              <QuestionList questionsList={questionsList.data} />
            </>

        }
      </div>
    </div >
  )
}

export default Homemainbar

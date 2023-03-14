import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './HomemainBar.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import QuestionList from './QuestionList'



const Homemainbar = () => {
  const location = useLocation()
  var user = useSelector((state) => (state.fetch_current_userReducer))
  const navigate = useNavigate();

  const questionsList = useSelector(state => state.questionReducer)
  const permit=user?.result?.permi;
  const askedq=user?.result?.noOfQuestionperday;
  const redirect = () => { if (user === null) { toast("Login/Signup to ask a Question !", { position: "top-center" });<ToastContainer />} else { if(permit>askedq){navigate("/AskQuestions")}else{toast("Daily Limit Exceeded !", { position: "top-center" });<ToastContainer />} }}

  return (
    <div className='home-main-bar'>
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

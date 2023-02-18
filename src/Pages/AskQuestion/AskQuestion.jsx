import React, { useState } from 'react'
import { askQuestion } from '../../actions/question'
import './AskQuestion.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const AskQuestion = () => {
    const [questionTitle, setQuestionTitle] = useState('')
    const [questionBody, setQuestionBody] = useState('')
    const [questionTags, setQuestionTags] = useState('')

    const dispatch = useDispatch()
    const User = useSelector((state) => (state.fetch_current_userReducer))
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ questionTitle, questionBody, questionTags })
        dispatch(askQuestion({ questionTitle, questionBody, questionTags, userPosted: User.result.name,userId:User?.result?._id }, navigate))  //may be modified further

    }



    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            setQuestionBody(questionBody + "\n")
        }
    }
    return (
//
        
            <div className="ask-ques-container">
                <h1>
                    Ask a Public Question
                </h1>
                
                <form onSubmit={handleSubmit}>
                    <div className='ask-form-container'>
                        <label htmlFor="ask-ques-tite">
                            <h4>
                                Title
                            </h4>
                            <p>
                                Be specific and imagine you're asking a question to another person.
                            </p><br />
                            <input type="text" onChange={(e) => { setQuestionTitle(e.target.value) }} name='questionTitle' id='ask-ques-title' placeholder='e.g. C++ is easy or difficult?' />
                        </label>
                        <label htmlFor="ask-ques-body"><br />
                            <h4>
                                What are the details of your problem ?
                            </h4>
                            <p>
                                Introduce the problem and expand on what you put in the title. Minimum 20 characters.
                            </p><br />
                            <textarea name='questionBody' id='ask-ques-body' onChange={(e) => { setQuestionBody(e.target.value) }} cols={30} rows="10" onKeyPress={handleEnter} />
                        </label>
                        <label htmlFor="ask-ques-tags"><br />
                            <h4>
                                Tags
                            </h4>
                            <p>
                                Add up to 5 tags to describe what your question is about. Start typing to see suggestions.
                            </p><br />
                            <input type="text" name='questionTags' onChange={(e) => { setQuestionTags(e.target.value.split(" ")) }} id='ask-ques-tags' placeholder='e.g. database array python mongodb ' />
                        </label>
                    </div><br />
                    <input type="submit" value='Review your Question ' className='review-btn' />
                </form>
            </div>
      
    )
}

export default AskQuestion


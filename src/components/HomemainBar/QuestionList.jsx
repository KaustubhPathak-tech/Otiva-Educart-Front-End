import React from 'react'
import Question from './Question'
import './HomemainBar.css'

const QuestionList = ({questionsList}) => {
    return (
        <>
            {

                questionsList.map((question) => (
                <Question question={question} key={question._id} />))

            }
        </>
    )
}

export default QuestionList

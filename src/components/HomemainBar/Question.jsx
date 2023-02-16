import React from 'react'
import moment from 'moment'
import './HomemainBar.css'
import { Link } from 'react-router-dom'
const Question = ({ question }) => {
    return (
        <div className='display-question-container'>
            <div className="display-votes-ans">
                <p>
                    {question.upVote.length - question.downVote.length}

                </p>

                <p>
                    Votes
                </p>

            </div>
            <div className="display-votes-ans">
                <p>
                    {question.noOfAnswer}

                </p>
                <p>Answers</p>


            </div>
            <div className='display-question-details'>
                <Link to={`/Questions/${question._id}`} className='question-title-link'>
                    {question.questionTitle}
                </Link>
                <div className="display-tags-time">
                    <div className="display-tags">
                        {
                            question.questionTags.map((tags) => (
                                <p key={tags}>{tags}</p>
                            ))
                        }
                    </div>
                    <p className='display-time'>
                        asked {moment(question.askedOn).fromNow()}&nbsp;&nbsp;
                        {question.userPosted}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Question

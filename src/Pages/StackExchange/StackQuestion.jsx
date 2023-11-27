import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import '../../components/HomemainBar/HomemainBar.css'

const StackQuestion = ({ question }) => {
    const date = new Date(question.creation_date * 1000); 

  // Format the date to ISO string
  const timestamp = date.toISOString();
    return (
        <div className='display-question-container'>
            <div className="display-votes-ans">
                <p>
                    {question.view_count}
                </p>

                <p className='question-detail-columns'>
                    
                    Views
                </p>

            </div>
            <div className="display-votes-ans">
                <p>
                    {question.answer_count}

                </p>
                <p className='question-detail-columns'>Answers</p>


            </div>
            <div className='display-question-details'>
                <a href={question.link} target='_blank' className='question-title-link question-detail-columns'>
                    {question.title}
                </a>
                <div className="display-tags-time">
                    <div className="display-tags">
                        {
                            question.tags.map((tags) => (
                                <p key={tags} className='favTags'>{tags}</p>
                            ))
                        }
                    </div>
                    <p className='display-time'>
                        Asked {moment(question.timestamp).fromNow()}&nbsp;&nbsp;
                        <span style={{color:"#009dff"}}>{question.owner.display_name}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default StackQuestion

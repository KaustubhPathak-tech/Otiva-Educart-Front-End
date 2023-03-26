import React from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import {Link,useParams} from 'react-router-dom'



import Avatar from '../../components/navbar/Avatar'
import {deleteAnswer} from '../../actions/question'



const DisplayAnswer = ({question,handleShare}) => {
  
  
  
  const User = useSelector((state) => (state.fetch_current_userReducer))
  const dispatch=useDispatch()
  const { id } = useParams()  
  const handleDelete=(answerId,noOfAnswer)=>{
    dispatch(deleteAnswer(id,answerId,noOfAnswer-1))
  }

  return (
    <div>
      {
        question.answer.map((ans)=>(
            <div className="display-ans" key={ans._id}>
                <p>
                    {ans.answerBody}
                </p>
                <div className="question-actions-user">
                    <div>
                        <button type='button' onClick={handleShare}>Share</button>
                         {
                            User?.result?._id === ans?.userId && 
                            (<button type="button" onClick={()=>handleDelete(ans._id,question.noOfAnswer )}>Delete</button>)
                          }
                    </div>
                    <div>
                        <p style={{width:"150px"}}>
                            Answered {moment(ans.answeredOn).fromNow()}
                        </p>
                        <Link
                            to={`/users/${ans.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar backgroundColor="green" px="8px" py="5px">
                              {ans.userAnswered.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{ans.userAnswered} </div>
                          </Link>
                    </div>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default DisplayAnswer

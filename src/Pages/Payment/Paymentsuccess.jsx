import React from 'react'
import { useDispatch } from 'react-redux'
import "./Paymentsuccess.css"
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import LeftSidebar from "../../components/LeftsideBar/LeftsideBar"
import { setCurrentUser } from "../../actions/currentUser";
import success from "../../assets/PAYMENT-SUCCESS (1).png"
import Button from 'react-bootstrap/Button'
const Paymentsuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchQuery = useSearchParams()[0]
  const reference = searchQuery.get("reference");
  const gohome = (e) => {
    e.preventDefault()
    navigate("/");
  }
  const ask = (e) => {
    e.preventDefault()
    navigate("/AskQuestions");
  }
  const log = (e) => {
    e.preventDefault()
    navigate("/");
    
  }
  return (
    <div className="successpage">
      <div className="home-container-1">
        <LeftSidebar />
      </div>
      <div className='home-container-2' style={{ display: "block", textAlign: "center" }}>
        <div className="ref">Reference No.  <b>{reference}</b></div><br />
        <div class="row" style={{ width: "90%" }}>
          <img src={success} alt="success" id='success'/>
        </div>

        <div class="row" style={{ width: "90%"}} id="buttons">
          <div class="col-lg-4" style={{ textAlign: "center" }}><Button variant='warning' onClick={log}>Back to Home </Button></div> 
           <Button variant='warning' onClick={gohome}>Browse more Questions </Button>
          <Button variant='warning' onClick={ask}>Ask Question</Button>

        </div>
      </div>
    </div>
  )
}

export default Paymentsuccess

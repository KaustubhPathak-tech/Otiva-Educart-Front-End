import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import LeftSidebar from "../../components/LeftsideBar/LeftsideBar"
import success from "../../assets/PAYMENT-SUCCESS (1).png"
import Button from 'react-bootstrap/Button'
const Paymentsuccess = () => {
  const navigate =useNavigate();
  const searchQuery = useSearchParams()[0]
  const reference = searchQuery.get("reference");
  const gohome =(e)=>{
    e.preventDefault()
    navigate("/");
  }
  const ask =(e)=>{
    e.preventDefault()
    navigate("/AskQuestions");
  }
  return (
    <div className="successpage">
      <div className="home-container-1">
        <LeftSidebar />
      </div>
      <div className='home-container-2' style={{ display: "block", textAlign: "center" }}>
        <div className="ref">Reference No.  <b>{reference}</b></div><br />
<div class="row" style={{width:"90%"}}>
<img src={success} alt="success" style={{ marginLeft: "auto" }} />
</div>
        
        <div class="row" style={{width:"90%"}}>
          <div class="col-lg-6" style={{textAlign:"right"}}><Button variant='outline-warning' onClick={gohome}>Browse more Questions </Button></div>
          <div class="col-lg-6" style={{textAlign:"left"}}><Button variant='outline-warning' onClick={ask}>Ask Question</Button></div>
        </div>
      </div>
    </div>
  )
}

export default Paymentsuccess

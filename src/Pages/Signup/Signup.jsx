
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import copy from 'copy-to-clipboard'

import { Link } from 'react-router-dom'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

import './Signup.css'
import { signup } from '../../actions/auth'
import LeftsideBar from '../../components/LeftsideBar/LeftsideBar'
import Spinner from 'react-bootstrap/esm/Spinner'
import axios from 'axios'


const Signup = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading]=useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()



  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true);
    setTimeout(()=>{setLoading(false)},8000);
    dispatch(signup({ name, email, password }, navigate));
  }
  const handleCopy = () => {
    copy(email)
    
    toast.success('Copied email : ' + email,{position:"top-center"});
    <ToastContainer />
  }

  return (

    <div className='signup_page'>
      <div className="home-container-1" id='signupleft'>
        <LeftsideBar />
      </div>
      
        <div class="row" id='signuprow'>
          <div class="col-lg-6" id='PlainContent'>

            <h1>Join the Stack Overflow community</h1><br />
            <div className="content">
              <FontAwesomeIcon icon={faCommentsDollar} />  Get unstuck — ask a question<br />
              <FontAwesomeIcon icon={faTags} /> Unlock new privileges like voting and commenting<br />
              <FontAwesomeIcon icon={faTags} /> Save your favorite tags, filters, and jobs<br />
              <FontAwesomeIcon icon={faTrophy} /> Earn reputation and badges<br />
            </div>
            <br />
            <p>Collaborate and share knowledge with a private group for FREE.<br />
              <a href="https://www.google.com" id='signupformlink' >Get Stack Overflow for Teams free for up to 50 users.</a></p>
          </div>
          <div class="col-lg-6" id='form-container'>

            <div className="form">
              <div id="signInDiv" style={{ paddingTop: "90px" }}></div>

              <form id='signupform' onSubmit={handleSubmit}>

                <label htmlFor="name">
                  <h4 style={{ paddingTop: "10px" }}>Name</h4>
                  <input type="text" required name='name' id='name' onChange={(e) => { setName(e.target.value) }} />
                </label><br />
                <label htmlFor="email">
                  <h4>Email</h4>
                  <input type="email" required name='email' id='email' onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Active Email id" ></input><br /><br />
                  
                </label>
                <br />
                <label htmlFor="password">
                  <h4 id='pass'>Password</h4>
                  <input type="password" name="password" required id="password" onChange={(e) => { setPassword(e.target.value) }} /><br />
                  <p>Passwords must contain at least eight characters,<br /> including at least 1 letter and 1 number.</p>

                </label>
                <br />

                <label htmlFor="promotional checkbox">
                  <input type="checkbox" name="opt" id="opt" /><div className="promotion">Opt-in to receive occasional product <br />
                    updates, user research invitations, company <br />announcements, and digests.&nbsp;&nbsp;&nbsp;</div>

                </label>
                <br />
                <button type="submit" name='signup' id='signupbutton'>{loading?(<><Spinner animation="border" variant="light" size='sm'/></>):(<>Sign up</>)}</button>
                <br />
                
                <p>By clicking “Sign up”, you agree to our <Link id='signupformlink'>terms of <br />service</Link> , <Link id='signupformlink' >privacy policy</Link> and <Link id='signupformlink' >cookie policy</Link></p>
              </form>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <p id='loginRedirect'>Already have an account? <Link to='/login' id='signupformlink'   >Log in</Link></p>
              
            </div>
          </div>
        </div>
      
      
    </div>


  )
}

export default Signup

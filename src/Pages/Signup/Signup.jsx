
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Signup.css'
import { signup } from '../../actions/auth'

const Signup = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signup({ name, email, password },navigate))
    console.log({ name, email, password })

  }
  return (
    <div className='signup_page'>
      <div className="plaincontent">
        <h1 id="main">Join the Stack Overflow community</h1><br />
        <div className="content">
          Get unstuck — ask a question<br />
          Unlock new privileges like voting and commenting<br />
          Save your favorite tags, filters, and jobs<br />
          Earn reputation and badges<br />
        </div>
        <p>Collaborate and share knowledge with a private group for FREE.<br />
          <a href="https://www.google.com" id='signupformlink' >Get Stack Overflow for Teams free for up to 50 users.</a></p>
      </div>
      <div className="form">
        <form id='signupform' onSubmit={handleSubmit}>

          <label htmlFor="name">
            <h4>Display name</h4>
            <input type="text" required name='name' id='name' onChange={(e) => { setName(e.target.value) }} />
          </label>
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" required name='email' id='email' onChange={(e) => { setEmail(e.target.value) }}></input>
          </label>
          <br />
          <label htmlFor="password">
            <h4 id='pass'>Password</h4><br />
            <input type="password" name="password" required id="password" onChange={(e) => { setPassword(e.target.value) }} /><br />
            <p>Passwords must contain at least eight characters,<br /> including at least 1 letter and 1 number.</p>

          </label>
          <br />

          <label htmlFor="promotional checkbox">
            <input type="checkbox" name="opt" id="opt" /><div className="promotion">Opt-in to receive occasional product <br />
              updates, user research invitations, company <br />announcements, and digests.&nbsp;&nbsp;&nbsp;</div>

          </label>
          <br />
          <button type="submit" name='signup' id='signupbutton'>Sign up</button>
          <br />
          <p>By clicking “Sign up”, you agree to our <Link id='signupformlink'>terms of <br />service</Link> , <Link id='signupformlink' >privacy policy</Link> and <Link id='signupformlink' >cookie policy</Link></p>
        </form>

        <p>Already have an account? <Link to='/login' id='signupformlink'   >Log in</Link></p>

      </div>


    </div>
  )
}

export default Signup
//
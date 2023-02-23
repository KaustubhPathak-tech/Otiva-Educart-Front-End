//importing packages
import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

//importing styles
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import icon from '../../assets/icon.png'

//importing component
import { login } from '../../actions/auth'

//main function goes here
const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login({ email, password }, navigate))
    

  }


  return (
    <div className='loginPage'>

      <img src={icon} alt='logo-icon'></img>

      <form id='loginform' onSubmit={handleSubmit}>
        <label htmlFor="email">
          <h4>Email</h4>
          <input type="email" name='email' required id='email' onChange={(e) => { setEmail(e.target.value) }} ></input>
        </label><br/>
        <label htmlFor="password">
          <h4 id='pass'>Password</h4><Link to='/forgotpassword' id='forgotpass'>Forgot password?</Link>
          <br />
          <input type="password" name="password" required id="password" onChange={(e) => { setPassword(e.target.value) }} /><br />
        </label>

        <br /><button type="submit" name='submit' className='loginButton' > Log in</button>
      </form>


      <p>Don't have an account ? </p><Link to='/signup' id="signuplink">Sign up</Link>
      <ToastContainer />
    </div>
  )
}

export default Login



//login page ends.
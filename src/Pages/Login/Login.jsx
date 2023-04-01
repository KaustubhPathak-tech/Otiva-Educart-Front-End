//importing packages
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import jwt_decode from "jwt-decode";

import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


//importing styles
import Spinner from 'react-bootstrap/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import icon from '../../assets/icon.png'

//importing component
import { login } from '../../actions/auth'
import { glogin } from "../../actions/auth";
import LeftsideBar from '../../components/LeftsideBar/LeftsideBar'

//main function goes here
const Login = () => {

  const [email, setEmail] = useState('');
  const [pics,setPics]=useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleCallbackResponse(res) {
    var googleuser = jwt_decode(res.credential);
    let name = googleuser?.name;
    let email = googleuser?.email;
    let pic = googleuser?.picture;
    setPics(pic);
    let password = googleuser?.sub;

    dispatch(glogin({ name, email, password }, navigate));
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "602166184134-sj45i02o9tsjsc05h931q4mf0q1ogpnf.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signIndiv"), {
      scope: "profile email",
      width: 240,
      height: 50,
      longtitle: true,
      theme: "dark",
    });
    // google.accounts.id.prompt();
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false) }, 8000)
    dispatch(login({ email, password }, navigate))
  }


  return (
    <div className='loginPage'>
      <div className="home-container-1">
        <LeftsideBar />
      </div>

      <img src={icon} alt='logo-icon'></img>


      <form id='loginform' onSubmit={handleSubmit}>
        

        <div id="signIndiv" ></div>
        <div style={{ textAlign: "center", margin: "10px auto 10px auto", fontWeight: "600" }}>Or</div>
        <h5 style={{ fontSize: "18px" }}>Email</h5>
        <input type="email" name='email' required id='email' onChange={(e) => { setEmail(e.target.value) }} />
        <br />


        <h5 style={{ fontSize: "18px" }} id="pass">Password</h5>
        <Link to='/forgotpassword' id='forgotpass'>Forgot password?</Link>

        <div className="password-container">
          <input type="password" name="password" required id="password" onChange={(e) => { setPassword(e.target.value) }} /><br /></div>
        <br />

        <button type="submit" name='submit' className='loginButton' disabled={loading}>{loading && <Spinner animation="border" variant="light" size='sm' style={{ marginRight: "5px" }} />} {loading ? (<></>) : (<>Log in</>)}</button>


      </form>


      <p id='sign'>Don't have an account ? </p><Link to='/signup' id="signuplink">Sign up</Link>

      {/* <ToastContainer /> */}
    </div>
  )
}

export default Login



//login page ends.



















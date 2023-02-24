import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LeftsideBar from '../../components/LeftsideBar/LeftsideBar'

import { reset } from '../../actions/auth';
import './Forgotpassword.css'
const Forgotpassword = () => {
    const [email, setEmail] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const resetPassword = (e) => {
        e.preventDefault()
        if (pass1 === pass2) { dispatch(reset({email, pass1},navigate))}
        else {
            toast('new password should be same in both fields !');
        }

    }

    return (
        <div className='forgotpage'>
            <div className="home-container-1 ">
                <LeftsideBar />
            </div>
            <div className='home-container-2'id='forgot-form'>
                <form onSubmit={resetPassword}>
                    <label htmlFor="ForgotPassword">
                        Email:<br/>
                        <input type="email" name="email" id="forgottenemail" placeholder='enter your email' onChange={(e) => { setEmail(e.target.value) }} />&nbsp;&nbsp;&nbsp;


                    </label><br /><br />
                    <label htmlFor="">
                        New Password:<br/>
                        <input type="password" name="" id="" onChange={(e) => { setPass1(e.target.value) }} />

                    </label><br /><br />
                    <label htmlFor="">
                    Re Enter New Password:<br/>
                        <input type="password" name="" id="" onChange={(e) => { setPass2(e.target.value) }} />
                    </label><br /><br />
                    <button type="submit">Reset Password</button>
                </form>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Forgotpassword

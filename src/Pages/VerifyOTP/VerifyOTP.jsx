import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './VerifyOTP.css'
import { verifyOTP } from '../../actions/auth'
const VerifyOTP = () => {

    const[email,setEmail]=useState('');
    const [otp, setOtp] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleVerify = (e) => {
        e.preventDefault()
        dispatch(verifyOTP({email,otp}, navigate));
    }

    return (
        <div className='verifypage'>

            <div className="home-container-2">
                <div className="form-container">
                    <form onSubmit={handleVerify}>
                        
                        <label htmlFor="email">
                            <h6>Enter Your Signup Email :</h6><br/>
                            <input type="email" onChange={(e) => { setEmail(e.target.value) }}></input>
                        </label>
                        <br />
                        <label htmlFor="otp">
                            <h6>Enter OTP sent to your Email : </h6>
                            <input type="text" onChange={(e) => { setOtp(e.target.value) }} /><br /><br />
                            <button type="submit" name='submit'>Submit</button>
                        </label>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default VerifyOTP

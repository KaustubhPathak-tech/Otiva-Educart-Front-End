import React from 'react'
import { useState } from 'react'
import Leftsidebar from "../../components/LeftsideBar/LeftsideBar"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './VerifyOTP.css'
import { verifyOTP } from '../../actions/auth'
import Spinner from 'react-bootstrap/esm/Spinner';
const VerifyOTP = () => {
    
    const [loading,setLoading]=useState(false);
    const[email,setEmail]=useState('');
    const [otp, setOtp] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleVerify = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(()=>{setLoading(false)},5000)
        dispatch(verifyOTP({email,otp}, navigate));
    }
    

    return (
        <div className='verifypage'>
            <div className="home-container-1">
                <Leftsidebar />
            </div>
            <div className="home-container-2" id='verification'>
                <div className="form-container" id='verifycontent'>
                    <div className="verify_header" style={{textAlign:'center'}}>
                    <h4 style={{marginBottom:"20px"}}>Verify Your Account! </h4>
                    </div>
                    <div className="alert" style={{textAlign:"center"}}>
                        <p style={{color:"red"}}>Do not Refresh the Page</p>
                    </div>
                    <form onSubmit={handleVerify} id='verifyform'>
                        
                        <label htmlFor="email">
                            <h6> Your Email </h6>
                            <input type="email" id='fillemail' onChange={(e) => setEmail(e.target.value)} required placeholder='Paste or Enter Copied email  '></input>
                        </label>
                        <br /><br/>
                        <label htmlFor="otp">
                            <h6>Enter OTP sent via Email </h6>
                            <input type="text" onChange={(e) => { setOtp(e.target.value) }} autoComplete="off" id='fillotp'/><br /><br />
                            <button type="submit" name='submit' disabled={loading} className="verifybutton">{loading?(<><Spinner animation="border" variant="light" size='sm' style={{marginRight:"5px"}}/></>):(<>Verify</>)}</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            
                        </label>
                    </form>
                    
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default VerifyOTP

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LeftsideBar from '../../components/LeftsideBar/LeftsideBar'
import { reset } from '../../actions/auth';

import './Forgotpassword.css'
import Spinner from 'react-bootstrap/esm/Spinner';
const Forgotpassword = () => {
    const [loading,setLoading]=useState(false);
    const [email, setEmail] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const resetPassword = (e) => {
        e.preventDefault()
        setLoading(true);
        setTimeout(()=>{setLoading(false)},5000)
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
                <form onSubmit={resetPassword} id='forgotfrom'>
                    <label htmlFor="ForgotPassword">
                        Email:<br/>
                        <input type="email" name="email" id="forgottenemail" required onChange={(e) => { setEmail(e.target.value) }} />&nbsp;&nbsp;&nbsp;


                    </label><br />
                    <label htmlFor="">
                        New Password:<br/>
                        <input type="password" name="" id="new" required onChange={(e) => { setPass1(e.target.value) }} />

                    </label><br /><br />
                    <label htmlFor="">
                    Re Enter New Password:<br/>
                        <input type="password" name="" id="reenter" required onChange={(e) => { setPass2(e.target.value) }} />
                    </label><br /><br />
                    <button type="submit" className='forgotreset' disabled={loading}>{loading?(<><Spinner animation="border" variant="light" size='sm' style={{marginRight:"5px"}}/></>):(<>Reset Password</>)}</button>
                </form>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Forgotpassword

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
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import Card from 'react-bootstrap/esm/Card';
const VerifyOTP = () => {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleVerify = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => { setLoading(false) }, 5000)
        dispatch(verifyOTP({ email, otp }, navigate));
    }


    return (
        <div className='verifypage'>
            <div className="home-container-1">
                <Leftsidebar />
            </div>
            <div className="home-container-2" id='verification'>
                <div className="form-container" id='verifycontent'>
                    <div className="verify_header" style={{ textAlign: 'center' ,display:"block"}}>
                        <h4 style={{ marginBottom: "20px" }}>Verify Your Account! </h4>
                    </div>
                    <div className="alert" style={{ textAlign: "center" ,display:"block"}}>
                        <p style={{ color: "red" }}>Do not Refresh the Page</p>
                    </div>
                    <Card style={{ width: '18rem' }} className="card-container">
                        <Card.Body>
                            <Form onSubmit={handleVerify}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email Id</Form.Label>
                                    <Form.Control type="email" placeholder="Paste or Enter Copied email  " name="email" required onChange={(e) => { setEmail(e.target.value) }} style={{fontSize:"12px"}}/>

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>OTP</Form.Label><br/>
                                    <Form.Text className="text-muted">
                                        OTP is sent to your Email
                                    </Form.Text><br/><br/>
                                    <Form.Control type="text" placeholder="Enter OTP" name="" onChange={(e) => { setOtp(e.target.value) }} autoComplete="off" required style={{fontSize:"12px"}}/>
                                </Form.Group>

                                <div className="submission" style={{ textAlign: "center" }}>
                                    <Button variant="primary" type="submit" disabled={loading} style={{ width: "100%"}}>
                                        {loading ? (<><Spinner animation="border" variant="light" size='sm' style={{ marginRight: "5px" }} /></>) : (<>Verify</>)}
                                    </Button>
                                </div>

                            </Form>
                        </Card.Body>
                    </Card>
                    {/* <form onSubmit={handleVerify} id='verifyform'>

                        <label htmlFor="email">
                            <h6> Your Email </h6>
                            <input type="email" id='fillemail' onChange={(e) => setEmail(e.target.value)} required placeholder='Paste or Enter Copied email  '></input>
                        </label>
                        <br /><br />
                        <label htmlFor="otp">
                            <h6>Enter OTP sent via Email </h6>
                            <input type="text" onChange={(e) => { setOtp(e.target.value) }} autoComplete="off" id='fillotp' /><br /><br />
                            <button type="submit" name='submit' disabled={loading} className="verifybutton">{loading ? (<><Spinner animation="border" variant="light" size='sm' style={{ marginRight: "5px" }} /></>) : (<>Verify</>)}</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        </label>
                    </form> */}

                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default VerifyOTP

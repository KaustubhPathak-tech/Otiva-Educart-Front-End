import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Pricing.css'
import { getpremium } from "../../actions/auth";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import LeftsideBar from '../../components/LeftsideBar/LeftsideBar'
import subscribe from '../../assets/subscription.png';
import gold from '../../assets/coin.png';
import silver from '../../assets/silver-medal.png';
import free from '../../assets/free.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setCurrentUser } from "../../actions/currentUser";
import Popup from "../../components/Popup/Popup";
const Pricing = () => {
    const dispatch = useDispatch();
    var payment = useSelector((state) => (state.authReducer));
    console.log(payment);
    const navigate = useNavigate();
    var User = useSelector((state) => (state.fetch_current_userReducer));
    const [email, setEmail] = useState(User?.result?.email);
    const [abc, setAbc] = useState(false);
    const handlefree = (e) => {
        e.preventDefault()
        if (User === null) {
            toast("Please Login or Signup to Subscribe", { position: "top-center" });
            return;
        }
        dispatch(getpremium({ amount: 1, email }, navigate));
        dispatch(setCurrentUser(null));
    };
    const handlesilver = (e) => {
        e.preventDefault()
        if (User === null) {
            toast("Please Login or Signup to Subscribe", { position: "top-center" });
            return;
        }
        dispatch(getpremium({ amount: 100, email }, navigate));
        dispatch(setCurrentUser(null));
    };
    const handlegold = (e) => {
        e.preventDefault()
        if (User === null) {
            toast("Please Login or Signup to Subscribe", { position: "top-center" });
            return;
        }
        dispatch(getpremium({ amount: 1000, email }, navigate));
        dispatch(setCurrentUser(null));
    };
    return (
        <div>
            <Popup trigger={abc} setTrigger={setAbc}>
            <h5> <blink><span style={{ color: "red" }}><b>ALERT !</b> </span></blink> &nbsp;&nbsp;Please <b style={{ color: "red" }}>Login Again</b> after Successful Payment to access services you paid for !</h5>
            </Popup>
            <div className="home-container-1">
                <LeftsideBar />
            </div>
            <div className="home-container-2" id='pricing-content'>
               
                <div className="heading" style={{ textAlign: "center", margin: "2% auto" }}>
                    
                    <h1>
                        Pricing
                        <img src={subscribe} alt="subscribe" width="40px" />
                    </h1>

                </div>
                <div class="row" style={{ textAlign: "center" }}>
                    <div class="col-lg-4">
                        <Card style={{ width: '18rem', borderColor: "rgb(245, 149, 6)" }}>
                            <Card.Img variant="top" src={free} id="img" />
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center" }}>Free</Card.Title>
                                <Card.Text>
                                    <h4>₹ 1 /month</h4>
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>1 Question per day</ListGroup.Item>

                            </ListGroup>
                            <Card.Body>
                                <Button onClick={() => setAbc(true)} style={{backgroundColor:"white",border:"none"}}><Button variant='warning' onClick={handlefree}>Try Free</Button></Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div class="col-lg-4">
                        <Card style={{ width: '18rem', borderColor: "rgb(245, 149, 6)" }}>

                            <span style={{ fontSize: "20px", textAlign: "center", backgroundColor: "rgb(245, 149, 6)", color: "#fff" }}>Recommended</span>
                            <Card.Img variant="top" src={silver} id="img" />
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center" }}>Silver</Card.Title>
                                <Card.Text>
                                    <h4>₹ 100 /month</h4>
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>5 Questions per day</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                            <Button onClick={() => setAbc(true)} style={{backgroundColor:"white",border:"none"}}><Button variant='warning' onClick={handlesilver}>Get Premium</Button></Button>
                            </Card.Body>
                        </Card></div>
                    <div class="col-lg-4">
                        <Card style={{ width: '18rem', borderColor: "rgb(245, 149, 6)" }}>
                            <Card.Img variant="top" src={gold} id="img" />
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center" }}>Gold</Card.Title>
                                <Card.Text>
                                    <h4>₹ 1000 /month</h4>
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Unlimited Questions per day</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                            <Button onClick={() => setAbc(true)} style={{backgroundColor:"white",border:"none"}}><Button variant='warning' onClick={handlegold}>Get Premium</Button></Button>
                            </Card.Body>
                        </Card></div>
                </div>
            </div>
        </div>
    )
}

export default Pricing

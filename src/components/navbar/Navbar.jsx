import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import decode from 'jwt-decode'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import searchicon from "../../assets/searchicon.svg";
import Avatar from "./Avatar";
import "./Navbar.css";
import { setCurrentUser } from "../../actions/currentUser";


const Navbar = () => {
  const dispatch = useDispatch()

  var User = useSelector((state) => (state.fetch_current_userReducer))
  // User=JSON.parse(localStorage.getItem('Profile'))


  // const [User,setUser]=useState();
  // var User = useSelector((state) => (state.currentUserReducer));
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
  // }, [dispatch]);

  // var User = ''

  // const isNavigated = JSON.parse(localStorage.getItem('Profile'));
  // if (isNavigated === null) {
  //   User = null
  //   console.log('0');


  // }
  // else {
  //   User = 1
  //   console.log('1');


  // }
  const Navigate = useNavigate()
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    Navigate('/')
    dispatch(setCurrentUser(null))
  }
  useEffect(() => {
    // const token = User?.token
    // if (token) {
    //   const decodedToken = decode(token)
    //   if (decodedToken.exp * 1000 < new Date().getTime()) {
    //     handleLogout()
    //   }
    // }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  },[dispatch] )   
  
  // [dispatch,handleLogout]




  return (
    <div className="navigation">


      <nav className="main-nav">
        <div className="navbar">
          <Link to="/" className="nav-logo nav-item">
            <img src={logo} alt="official logo"></img>
          </Link>
          <Link to="https://stackoverflow.co/" target="_blank" className="nav-btn nav-item">
            About
          </Link>
          <Link to="https://stackoverflow.co/" target="_blank" className="nav-btn nav-item">
            Products
          </Link>
          <Link to="https://stackoverflow.co/teams" target="_blank" className="nav-btn nav-item">
            For Teams
          </Link>
          <form id="searchform">
            <img
              src={searchicon}
              alt="searchicon"
              width="18px"
              className="searchicon"
            />
            <input
              type="text"
              name="searchbox"
              id="searchinput"
              placeholder="Search..."
            />
          </form>

          {User === null ?
            <>
              <Link to="/login" className="nav-links nav-btn nav-item">
                Log in
              </Link>
              <Link to="/signup" className="nav-links nav-btn nav-item">
                Sign up
              </Link>
            </>
            :
            <>
              <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="7px"
                borderRadius="50%"
                color="white"
              >
                <Link
                  to={`/users/${User?.result?._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {User.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="nav-links nav-btn nav-item" onClick={handleLogout}>Log out</button>
            </>
          }
        </div>
      </nav>

    </div>
  );

}

export default Navbar;



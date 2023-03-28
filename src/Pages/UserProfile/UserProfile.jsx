import React from "react";
import { useState } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";


import "./UserProfile.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";


import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import LeftSidebar from "../../components/LeftsideBar/LeftsideBar";
import Avatar from "../../components/navbar/Avatar";
import Spinner from 'react-bootstrap/esm/Spinner'
import { setCurrentUser } from "../../actions/currentUser";

import { deleteAccount } from "../../actions/users"
import Button from "react-bootstrap/esm/Button";

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];

  const currentUser = useSelector((state) => state.fetch_current_userReducer);
  const [Switch, setSwitch] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true);
    setTimeout(() => { setLoading(false) }, 8000);
    dispatch(deleteAccount(id, navigate))
    dispatch(setCurrentUser(null));

  }
  return (
    <div className="userprofilepage">
      <div className="home-container-1">
        <LeftSidebar />
      </div>
      <div className="home-container-2">
        <section id="content">
          <div className="user-details">
            <Avatar
              backgroundColor="#53a2e8"

              color="#ffff"
              fontSize="50px"
              px="4%"
              py="3%"
              borderRadius="5px"
            >
              {currentProfile?.name.charAt(0).toUpperCase()}
            </Avatar>

            <div className="user-name">
              <h1>{currentProfile?.name}</h1>
              <p>
                <FontAwesomeIcon icon={faBirthdayCake} /> &nbsp; Joined{" "}
                {moment(currentProfile?.joinedOn).fromNow()}
              </p>
              <p>{currentUser?.result._id === id && (
                <>



                  <Button variant="secondary" onClick={handleSubmit}>{loading ? (<><Spinner animation="border" variant="light" size='sm' /></>) : (<>  <FontAwesomeIcon icon={faTrash} /> Delete Account</>)}</Button>{' '}
                  <Button variant="secondary" onClick={() => setSwitch(true)}> {" "}
                    <FontAwesomeIcon icon={faPen} /> Edit Account</Button>{' '}
                </>

              )}</p>
            </div>

          </div>

          <>
            {Switch ? (
              <EditProfileForm
                currentUser={currentUser}
                setSwitch={setSwitch}
              />
            ) : (

              <ProfileBio currentProfile={currentProfile} />
            )}
          </>
        </section>
      </div >
      <ToastContainer />
    </div >
  );
};

export default UserProfile;

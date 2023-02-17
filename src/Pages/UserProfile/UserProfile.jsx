import React from "react";
import "./UserProfile.css";
import { useState } from "react";
import moment from "moment";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
import LeftSidebar from "../../components/LeftsideBar/LeftsideBar";
import Avatar from "../../components/navbar/Avatar";
const UserProfile = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];

  const currentUser = useSelector((state) => state.fetch_current_userReducer);
  const [Switch, setSwitch] = useState(false);
  // const handleEdit=()=>{

  // }
  return (
    <div className="userprofilepage">
      <div className="home-container-1">
        <LeftSidebar />
      </div>
      <div className="home-container-2">
        <section id="content">
          <div className="user-details">
            <Avatar
              backgroundColor="purple"
              color="white"
              fontSize="50px"
              px="40px"
              py="30px"
            >
              {currentProfile?.name.charAt(0).toUpperCase()}
            </Avatar>

            <div className="user-name">
              <h1>{currentProfile?.name}</h1>
              <p>
                <FontAwesomeIcon icon={faBirthdayCake} /> &nbsp; Joined{" "}
                {moment(currentProfile?.joinedOn).fromNow()}
              </p>
            </div>
            {currentUser?.result._id === id && (
              <button
                type="button"
                onClick={() => setSwitch(true)}
                className="edit-profile-btn"
              >
                {" "}
                <FontAwesomeIcon icon={faPen} /> Edit Profile
              </button>
            )}
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
      </div>
    </div>
  );
};

export default UserProfile;
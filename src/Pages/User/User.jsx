import React from 'react'
import { useLocation } from 'react-router-dom'
import LeftSidebar from '../../components/LeftsideBar/LeftsideBar'
import UsersList from './UsersList'
import './User.css'
const User = () => {

  const location = useLocation()

  return (
    <div className='.home-container-1'>
      <div id="leftsidebar">
        <LeftSidebar />
      </div>
      <div className="tags-container-5">
        
          <h1>Users</h1>
          <UsersList />


       
      </div>
    </div>
  )
}

export default User

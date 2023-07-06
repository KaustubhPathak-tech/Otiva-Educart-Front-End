import React from 'react'
import { useSelector } from 'react-redux'

import './User.css'

import User from './Users'

const UsersList = () => {
  const users = useSelector((state) => state.usersReducer)
  return (
    <div className="userList-container">
      {
        users.map((user) => (
          <User user={user} key={user?._id} />
        ))
      }
    </div>
  )
}

export default UsersList

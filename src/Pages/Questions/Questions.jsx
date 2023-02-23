

import React from 'react'

import '../../App.css'

import LeftsideBar from '../../components/LeftsideBar/LeftsideBar'
import RightsideBar from '../../components/RightsideBar/RightsideBar'
import HomemainBar from '../../components/HomemainBar/HomemainBar'

const Questions = () => {
  return (
    <div className="questionPage">
      <div className="home-container-1">
        <LeftsideBar />
      </div>
      <div className="home-container-2">
        <div className="home-container-2-1">
          <HomemainBar />
        </div>
        <div className="home-container-2-2">
          
          <RightsideBar />
        </div>
      </div>
    </div>

  )
}
export default Questions


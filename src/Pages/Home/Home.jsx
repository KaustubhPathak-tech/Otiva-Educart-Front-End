

import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import '../../App.css'
import LeftsideBar from '../../components/LeftsideBar/LeftsideBar'
import RightsideBar from '../../components/RightsideBar/RightsideBar'
import HomemainBar from '../../components/HomemainBar/HomemainBar'

const Home = () => {
  return (
    <div className="homePage">
      <div className='home-container-1'>

        <LeftsideBar />

      </div>
      <div className="home-container-2">

        <HomemainBar />
      </div>
        <div className="home-container-3">
          <RightsideBar />
        </div>


    </div>

  )
}
      export default Home

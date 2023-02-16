import React from 'react'
import LeftsideBar from '../../components/LeftsideBar/LeftsideBar'
import RightsideBar from '../../components/RightsideBar/RightsideBar'
import QuestionDetails from './QuestionDetails'


const DisplayQuestion = () => {
    return (
        <div className="homePage">
            <div className='home-container-1'>

                <LeftsideBar />

            </div>
            <div className="home-container-2">
            <QuestionDetails />
            </div>
           
            <div className="home-container-3">
                <RightsideBar />
            </div>


        </div>
    )
}

export default DisplayQuestion

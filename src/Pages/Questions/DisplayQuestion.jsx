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
            <div className="home-container-2" style={{padding:"60px 25px"}}>
                <div className="home-container-2-1">
                    <QuestionDetails />
                </div>
                <div className="home-container-2-2" style={{padding:"0px 25px"}}>
                    <RightsideBar />
                </div>
            </div>
        </div>




      
    )
}

export default DisplayQuestion

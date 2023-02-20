import React from 'react'
import LeftsideBar from '../../components/LeftsideBar/LeftsideBar'
import RightsideBar from '../../components/RightsideBar/RightsideBar'
import QuestionDetails from './QuestionDetails'
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DisplayQuestion = () => {
    return (
        <div className="homePage">
            <div className='home-container-1'>

                <LeftsideBar />

            </div>
            <div className="home-container-2" >
                <div className="home-container-2-1">
                    <QuestionDetails />
                </div>
                <div className="home-container-2-2">
                    <RightsideBar />
                </div>
            </div>
            <ToastContainer/>
        </div>




      
    )
}

export default DisplayQuestion

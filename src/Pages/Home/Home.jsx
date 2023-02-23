//importing packages
import React from "react";
//importing style
import "../../App.css";
//importing components
import LeftsideBar from "../../components/LeftsideBar/LeftsideBar";
import RightsideBar from "../../components/RightsideBar/RightsideBar";
import HomemainBar from "../../components/HomemainBar/HomemainBar";

//main function goes here
const Home = () => {
  return (
    <div className="homePage">
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
  );
};
export default Home;


//home page ends
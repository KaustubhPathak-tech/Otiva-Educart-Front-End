import React from 'react'
import { useSearchParams } from 'react-router-dom'
import LeftSidebar from "../../components/LeftsideBar/LeftsideBar"
import success from "../../assets/PAYMENT-SUCCESS (1).png"
const Paymentsuccess = () => {
  const searchQuery = useSearchParams()[0]
  const reference = searchQuery.get("reference");
  return (
    <div className="successpage">
      <div className="home-container-1">
        <LeftSidebar />
      </div>
      <div className='home-container-2' style={{ display: "block", textAlign: "center" }}>
        <div className="ref">Reference No.  <b>{reference}</b></div><br />
        <img src={success} alt="success" style={{ marginLeft: "auto" }} />

      </div>
    </div>
  )
}

export default Paymentsuccess

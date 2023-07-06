import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Popup.css"
function Popup(props) {
  
  return (props.trigger)?(
    <div className='popup'>
        <div className='popup-inner'>
            
            <button className='close-btn' onClick={()=>props.setTrigger(false)}><FontAwesomeIcon icon={faXmark} style={{fontWeight:"800"}} /></button>
            {props.children}
        </div>
    </div>
  ):"";
}

export default Popup

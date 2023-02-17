import React from 'react'
import './Footer.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import india from '../../assets/india.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="content_footer">
                <h5>Made with <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} /> in <img src={india} width="18" /></h5>
                &copy;{" "}
                <a href="https://www.linkedin.com/in/kaustubh-pathak-293116198/">
                    Kaustubh Pathak
                </a>
            </div>
        </div>
    )
}

export default Footer

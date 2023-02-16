import React from 'react'
import './RightsideBar.css'
import comment from '../../assets/message-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blacklogo from '../../assets/blacklogo.svg'


const Widget = () => {
  return (
    <div className='widget'>
      <h4>The Overflow Blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width='18' />
          <p>Three layers to secure a   software     development organization
            Does your professor pass the Turing test? (Ep. 537)
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width='18' />
          <p>Does your professor pass the Turing test? (Ep. 537)
          </p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width='18' />
          <p>Three layers to secure a   software     development organization
            Does your professor pass the Turing test? (Ep. 537)
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width='18' />
          <p>Does your professor pass the Turing test? (Ep. 537)
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blacklogo} alt="pen" width='18' />
          <p>Does your professor pass the Turing test? (Ep. 537)
          </p>
        </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
        <p>38</p>
          <p>Three layers to secure a   software     development organization
            Does your professor pass the Turing test? (Ep. 537)
          </p>
        </div>
        <div className="right-sidebar-div-2">
        <p>20</p>
          <p>Does your professor pass the Turing test? (Ep. 537)
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>14</p>
          <p>Does your professor pass the Turing test? (Ep. 537)
          </p>
        </div>
      </div>
    </div>
  )
}

export default Widget

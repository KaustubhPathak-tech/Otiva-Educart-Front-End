import React from 'react'
import './LeftsideBar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.svg'

const LeftsideBar = ({ question }) => {
    return (
        <div className='left-sidebar'>
            <nav className='side-nav'>
                <NavLink to='/' className='side-nav-links'  activeclassname='active'>
                    <p>Home</p>
                </NavLink>


                <div className="side-nav-div">
                    <p>PUBLIC</p>
                    <NavLink to='/Questions' className='side-nav-links' activeclassname='active'>
                        <img src={Globe} alt="globe" />
                        <p> &nbsp;Questions</p>
                    </NavLink>


                    <NavLink to='/tags' className='side-nav-links' activeclassname='active'>
                        <p>Tags</p>
                    </NavLink>

                    <NavLink to='/users' className='side-nav-links'  activeclassname='active' >
                        <p>Users</p>
                    </NavLink>
                </div>
            </nav>

        </div>
    )
}

export default LeftsideBar

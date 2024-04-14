import React from 'react'
import "./sidenav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBuilding, faCircleUser, faClock, faList, faUsers, faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const SideNav = () => {
    const navigate = useNavigate()

  return (
    <div className='sidenav'>
        <div className='sidenavTitle'>
            <p>Menu</p>
            <FontAwesomeIcon icon={faBars} className='sidenavTitleIcon'/>
        </div>
        <div className='optionsContainer'>
            <div className='sidenavOption'>
                <FontAwesomeIcon className='sidenavOptionIcon' icon={faWindowMaximize}/>
                <p>DashBoard</p>
            </div>
            <div className='sidenavOption'>
                <FontAwesomeIcon className='sidenavOptionIcon' icon={faBuilding}/>
                <p>Etablissement</p>
            </div>
            <div className='sidenavOption'>
                <FontAwesomeIcon className='sidenavOptionIcon' icon={faUsers}/>
                <p>Utilisateur</p>
            </div>
            <div className='sidenavOption'>
                <FontAwesomeIcon className='sidenavOptionIcon' icon={faClock}/>
                <p>Demandes</p>
            </div>
            <div className='sidenavOption'>
                <FontAwesomeIcon className='sidenavOptionIcon' icon={faList}/>
                <p>Service Catalogue</p>
            </div>
            <div className='sidenavOption' onClick={()=>{navigate("/overview/profile")}}>
                <FontAwesomeIcon className='sidenavOptionIcon' icon={faCircleUser}/>
                <p>Profile</p>
            </div>
        </div>
    </div>
  )
}

export default SideNav
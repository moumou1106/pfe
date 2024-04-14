import React from 'react'
import NavBar from '../NavBar/NavBar'
import "./overview.css"
import SideNav from '../SideNav/SideNav'
import { Outlet } from 'react-router-dom'

const OverView = () => {
  return (
    <div className='overview'>
        <NavBar/>
        <SideNav/>
        <div className='contentContainer'>
            <Outlet/>
        </div>
    </div>
  )
}

export default OverView
import React from 'react'
import "./navbar.css"
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <div className='Navbar'>
        <p className='deconnecter' onClick={()=>{
          localStorage.removeItem('token');
          navigate("/")
        }}>Se Déconnecter</p>
    </div>
  )
}

export default NavBar
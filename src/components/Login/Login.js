import React, { useState } from 'react'
import "./login.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [show,setShow] = useState(false)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = async (body) => {
        try {
            const data = await axios.post('http://localhost:3000/api/users/login',body)
            localStorage.setItem('token', data.data.token)
            navigate("/overview")
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='loginContainer'>
        <p className='loginTitle'>Se Connecter</p>
        <div className='inputLogin'>
            <p>Email</p>
            <div className='inputBox'><input type="text" placeholder='Entrer votre email' value={email} onChange={(e)=>setEmail(e.target.value)}/></div>
        </div>
        <div className='inputLogin'>
            <p>Mot de passe</p>
            <div className='inputBox'>
                <input type={show ? "text" : "password"} placeholder='Entrer votre mot de passe' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                {
                    show ? <FontAwesomeIcon icon={faEye} className='loginIcon' onClick={()=>setShow(!show)}/> : <FontAwesomeIcon icon={faEyeSlash} className='loginIcon' onClick={()=>setShow(!show)}/>
                }
            </div>
        </div>
        <p className='loginButton' onClick={(e)=>{
            e.preventDefault()
            handleLogin({
                email:email,
                password:password
            })
        }}>Se connecter</p>
        <div className='dividerLogin'><p className='ou'>Ou</p></div>
        <p className='registerLink' onClick={()=> navigate("/register")}>Crée votre Completer</p>
    </div>
  )
}

export default Login
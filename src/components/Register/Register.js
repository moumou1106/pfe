import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import "./register.css"
import axios from 'axios'


const Register = () => {
    const [show,setShow] = useState(false)
    const [show2,setShow2] = useState(false)
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [password2,setPassword2] = useState("")
    const [phone,setPhone] = useState("")
    const navigate = useNavigate()

    const handleRegister = async (body) => {
        try {
            if(body.password === body.password2){
                await axios.post('http://localhost:3000/api/users/register',body)
                navigate('/login')
            }
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div className='registerContainer'>
        <p className='registerTitle'>Inscrivez Vous</p>
        <div className='inputregister'>
            <p>Nom</p>
            <div className='inputBox'><input type="text" placeholder='Entrer votre nom' onChange={(e)=>setLastName(e.target.value)} value={lastName}/></div>
        </div>
        <div className='inputregister'>
            <p>Prénom</p>
            <div className='inputBox'><input type="text" placeholder='Entrer votre prénom' onChange={(e)=>setFirstName(e.target.value)} value={firstName}/></div>
        </div>
        <div className='inputregister'>
            <p>Email</p>
            <div className='inputBox'><input type="text" placeholder='Entrer votre email' onChange={(e)=>setEmail(e.target.value)} value={email}/></div>
        </div>
        <div className='inputregister'>
            <p>Numéro mobile</p>
            <div className='inputBox'><input type="text" placeholder='Entrer votre numéro mobile' onChange={(e)=>setPhone(e.target.value)} value={phone}/></div>
        </div>
        <div className='inputregister'>
            <p>Mot de passe</p>
            <div className='inputBox'>
                <input type={show ? "text" : "password"} placeholder='Entrer votre mot de passe' onChange={(e)=>setPassword(e.target.value)} value={password}/>
                {
                    show ? <FontAwesomeIcon icon={faEye} className='registerIcon' onClick={()=>setShow(!show)}/> : <FontAwesomeIcon icon={faEyeSlash} className='registerIcon' onClick={()=>setShow(!show)}/>
                }
            </div>
        </div>
        <div className='inputregister'>
            <p>Confirmer mot de passe</p>
            <div className='inputBox'>
                <input type={show2 ? "text" : "password"} placeholder='Confirmer votre mot de passe' onChange={(e)=>setPassword2(e.target.value)} value={password2}/>
                {
                    show2 ? <FontAwesomeIcon icon={faEye} className='registerIcon' onClick={()=>setShow2(!show2)}/> : <FontAwesomeIcon icon={faEyeSlash} className='registerIcon' onClick={()=>setShow2(!show2)}/>
                }
            </div>
        </div>
        <p className='registerButton' onClick={(e)=>{
            e.preventDefault()
            handleRegister({
                firstName,
                lastName,
                email,
                phone,
                password,
                password2,
            })
        }}>Crée votre Completer</p>
        <div className='dividerregister'><p className='ou'>Ou</p></div>
        <p className='registerLink' onClick={()=> navigate("/login")}>Se Connecter</p>
    </div>
  )
}

export default Register
import React, { useContext, useState } from 'react'
import { userContext } from '../Context/UserContext'

function Login() {
   let {setUser} = useContext(userContext)
   let [userName,setUserName] =  useState("")
   let [pass,setPass] = useState("")
   let handleSubmit = (e)=> {
    e.preventDefault()
    setUser(userName);
   }
  return (
    <>
    <h2>Login</h2>
    <input 
    type="text"
    value={userName}
    onChange={(e)=> setUserName(e.target.value)} 
    placeholder='Username' />
    <input 
    type="password"
    value={pass}
    onChange={(e)=> setPass(e.target.value)}
    placeholder='password'/>
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login
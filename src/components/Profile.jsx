import React, { useContext } from 'react'
import { userContext } from '../Context/UserContext'

function Profile() {
  let {user} = useContext(userContext)
  return (
    <>
    <h2>Profile</h2>
    {
       user ? <p>React developer {user}</p> : <p>Please Login First</p>
    }
    </>
  )
}

export default Profile
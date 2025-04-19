import React, { useState } from 'react'
import { userContext } from './UserContext'

// here children represent those components who will be wrapped inside <UserContextProvider/> component in app component
function UserContextProvider({children}) {
    let msg = "Hello";
  let [user,setUser] =  useState(null)
  return (
    <userContext.Provider value={{msg,user,setUser}}>
    {children}
    </userContext.Provider>
  )
}

export default UserContextProvider
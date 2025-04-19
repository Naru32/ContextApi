import React, { useContext } from 'react'
import { userContext } from './Context/UserContext'


function Child() {
   const {msg} =  useContext(userContext)
 
  return (
    <>
    <p>
    This is Child Component {msg}
    </p>
    </>
  )
}

export default Child
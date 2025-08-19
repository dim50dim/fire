import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
const Protected = () => {
    const {user} = UserAuth();
    if(!user) {
        return <Navigate to="/"/>
    }
  return (
    <div>
      
    </div>
  )
}

export default Protected

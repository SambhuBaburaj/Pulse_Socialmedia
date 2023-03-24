import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function UserHome() {
    const user=localStorage.getItem('user')
    const AuthToken=localStorage.getItem('UserAccessToken')
    if(!user&&AuthToken)
    {
      localStorage.removeItem('UserAccessToken')
      localStorage.removeItem('user')

    }
   

  return (
   user&&AuthToken? <Navigate to='/home'/>:<Outlet/>
  )
}

export default UserHome
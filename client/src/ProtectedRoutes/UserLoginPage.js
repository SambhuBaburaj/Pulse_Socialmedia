import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'
function UserLoginPage() {
    const user=localStorage.getItem('user')
    const AuthToken=localStorage.getItem('UserAccessToken')
    if(!(user&&AuthToken))
    {
      localStorage.removeItem('UserAccessToken')
      localStorage.removeItem('user')

    }
  return (
    user&&AuthToken?<Outlet/>:<Navigate to='/'/>
  )
}

export default UserLoginPage
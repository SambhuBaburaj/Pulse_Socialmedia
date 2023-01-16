import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'
function UserLoginPage() {
    const user=localStorage.getItem('user')
  return (
    user?<Outlet/>:<Navigate to='/'/>
  )
}

export default UserLoginPage
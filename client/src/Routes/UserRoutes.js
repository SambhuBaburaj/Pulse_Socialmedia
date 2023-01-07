import React from 'react'
import { Routes, Route } from "react-router-dom";
import LoginPage from '../Pages/User/LoginPage';

function UserRoutes() {
  return (
<Routes>
<Route path='/' element={<LoginPage/>}/>

</Routes>
  )
}

export default UserRoutes
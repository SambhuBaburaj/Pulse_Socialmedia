import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/User/Home';
import LoginPage from '../Pages/User/LoginPage';
import UserHome from '../ProtectedRoutes/UserHome';
import UserLoginPage from '../ProtectedRoutes/UserLoginPage';

function UserRoutes() {
  return (
<Routes>
  <Route element={<UserHome/>}>
<Route path='/' element={<LoginPage/>}/>
</Route>
<Route element={<UserLoginPage/>}>
<Route path='/home'element={<Home/>}/>

</Route>


</Routes>
  )
}

export default UserRoutes
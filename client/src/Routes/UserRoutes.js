import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/User/Home";
import LoginPage from "../Pages/User/LoginPage";
import UserHome from "../ProtectedRoutes/UserHome";
import UserLoginPage from "../ProtectedRoutes/UserLoginPage";
import Messages from "../Pages/User/Messages";
import Newsfeed from "../components/User/home/Newsfeed";
import SearchPeople from "../Pages/User/SearchPeople";
import Notification from "../Pages/User/Notification";
import Profile from "../Pages/User/Profile";
function UserRoutes() {
  return (
    <Routes>
      <Route element={<UserHome />}>
        <Route path="/" element={<LoginPage />} />
      </Route>
      <Route element={<UserLoginPage />}>
        <Route path="" element={<Home />}>
          <Route path="/home" element={<Newsfeed />} />
          <Route path="/search" element={<SearchPeople />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/profile" element={<Profile />} />

        </Route>
        <Route path="/messages" element={<Messages />} />
      </Route>
    </Routes>
  );
}

export default UserRoutes;

import React from "react";
// import { FaDev } from "react-icons/fa";
import styles from "../../components/User/home/App.module.css";
import Sidebar from "../../components/User/home/Sidebar";
import navigationData from "../../components/User/data/Navigation";
// import SideBar from "../../components/User/home/Sidebar";
import Newsfeed from "../../components/User/home/Newsfeed";
import NewFollow from "../../components/User/home/NewFollow";
import { Outlet, useLocation } from "react-router-dom";
import ChatNames from "../../components/User/messages/ChatNames";
import ChatMessages from "../../components/User/messages/ChatMessages";
function Messages() {
  return (
    <div className={styles.container}>
      <div>
        <Sidebar navigationData={navigationData} />
      </div>

      <div className="w-full bg-blue-500 flex justify-end">
        <div className="w-5/6 bg-green-500  h-20 flex justify-center">
          <div className=" p-4 pt-9 w-5/6 bg-black h-10 flex justify-center">
         <ChatNames/>
         
           <ChatMessages/> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;

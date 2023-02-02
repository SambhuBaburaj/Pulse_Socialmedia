import React, { useState, useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CgProfile } from "react-icons/cg";
import { IoLogoEdge, IoBookmark } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { HiAnnotation, HiSearch } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import ShareMedia from "../../../Pages/User/ShareMedia";
import {

  BsHouseFill,
} from "react-icons/bs";

import classNames from "classnames";
import styles from "../home/Sidebar.module.css";
import { Navigate } from "react-router-dom";


const Sidebar = ({ navigationData }) => {
const [currentRoute, setCurrentRoute] = useState(useLocation().pathname);
const [MediaModal, setMediaModal] = useState(false);


  const Navigate = useNavigate();

const LogOut=()=>
{
  localStorage.removeItem('user');
  localStorage.removeItem('UserAccessToken');
  Navigate('/')
}

  const routeing = (element) => {

    if(element==='/post')
 {   
  
      setMediaModal(!MediaModal)

  }
    else{
    
      setCurrentRoute(element);
      Navigate(element);
    }
  };

  const renderIcon = useCallback((element) => {
    switch (element) {
      case "/home":




        return (
          <>
            <strong className="flex gap-3 items-center">
              <BsHouseFill />
              Home
            </strong>
          </>
        );
      case "/messages":
        return (
          <strong className="flex gap-3 items-center">
            <HiAnnotation /> Messages
            {/* Messages <Navigate to="/messages" /> */}
          </strong>
        );
      case "/search":
        return (
          <strong className="flex gap-3 items-center">
            <HiSearch />
            Search
            {/* <Navigate to='/notification'/> */}
          </strong>
        );
      case "/notification":
        return (
          <strong className="flex gap-3 items-center">
            <FiBell />
            Notification
          </strong>
        );
      case "/post":
        return (
          <div className="flex gap-3 items-center">
            <AiFillPlusCircle /> Create
            {/* <button onClick={() => {setMediaModal(!MediaModal)}}> Create </button> */}
          </div>
        );
      case "/profile":
        return (
          <div className="flex gap-3 items-center">
            <CgProfile /> Profile
          </div>
        );
      default:
        return <></>;
    }
  }, []);

  return (
    <>
    <div>
      <nav className={styles.wrapper}>
        <span className={styles.logo}>
          <IoLogoEdge className="hover:animate-spin" />
          <strong className="">Pulse</strong>{" "}
          <img
            className="w-20 max-w-sm "
            src="https://media.tenor.com/Q0yc7HlXW3oAAAAC/heartbeat-heart.gif"
            alt=""
          />
        </span>

        {/* the ul is here */}
        <ul className={styles.navListItems}>
          {navigationData.map((element, index) => (
            <li
              key={index}
              className={classNames([
                styles.navItem,
                currentRoute == element && styles.navItemActive,
                "group",
              ])}
              onClick={() => {
                routeing(element);
              }}
            >
              {renderIcon(element)}
            </li>
          ))}
        </ul>
        <div className={styles.bottomWrapper}>
          <span onClick={LogOut} className={styles.settingsLogo}>
            <IoMdLogOut />
            LogOut
          </span>
        </div>
      </nav>
    </div>
    {MediaModal&&<ShareMedia setMediaModal= {setMediaModal} MediaModal= {MediaModal}/>}
    
    </>
  );
};

export default Sidebar;

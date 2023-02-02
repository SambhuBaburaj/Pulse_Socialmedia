import React, { useContext, useEffect } from "react";
// import { FaDev } from "react-icons/fa";
import styles from "../../components/User/home/App.module.css";
import Sidebar from "../../components/User/home/Sidebar";
import navigationData from "../../components/User/data/Navigation";
// import SideBar from "../../components/User/home/Sidebar";
import Newsfeed from "../../components/User/home/Newsfeed";
import NewFollow from "../../components/User/home/NewFollow";
import { Outlet, useLocation } from "react-router-dom";
// import { ModelContest } from "../../hooks/ContestHook";
// import '../../Assets/homestyle.css'
function Home() {


  // const {UploadMedia}=useContext(ModelContest)

  return (
    <div className={styles.container}>
      <div>
        <Sidebar navigationData={navigationData} />
        {/* <Sidebar  /> */}

      </div>
     
      <div className={styles.devLogo}>
      <Outlet />
       
          {(useLocation().pathname.toString() === "/profile")  ? (
            <></>
          ) : (
        <div className="w-72">

            <NewFollow />
        </div>

          )}
      </div>
    </div>
  );
}

export default Home;

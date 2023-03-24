import React, { useEffect } from "react";
import { faGrinHearts } from "@fortawesome/free-regular-svg-icons";
import {faHeart, faComment, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import {

  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

// import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NewsFeed } from "../../../Api/APIcalls";
import { useState } from "react";
import UserInstance from "../../../Api/Axios";
// import image from '../../../../../server/public/images/1675355742967-photo-1530082625928-db66d39c5a21.jpg'
// import UserInstance from "../../../../../server/public/images/";

import env from "react-dotenv";
import HandleErrors from "../Error/HandleErrors";

function Newsfeed() {
const [NewsFeedData,SetNewsFeedData]=useState([])

useEffect(()=>
{
  const feed=UserInstance.get('/NewsFeed').then((data)=>
  {
let datafeed=data.data.feed

// const base64 = Buffer.from(imageData.data).toString("base64");
// setImage(`data:${imageData.contentType};base64,${base64}`);
SetNewsFeedData(datafeed)
datafeed.map((val,key)=>
{

return  val.likes.indexOf(val.User.email);

})

  }
  ).catch((err)=>
  {
console.log(err);
HandleErrors()

  })
},[])






  return (
    <div className="w-4/6 flex justify-center bg-gray-900 ">
      <div className="w-4/6  ">
        <div className="py-10 bg-gray-900 ">
     
        {NewsFeedData.slice(0).reverse().map((val,key)=>
     {
      return(
        <div className="py-4 px-2 ">
          
          
            <div className="max-w-md mx-auto bg-black shadow-lg rounded-md overflow-hidden md:max-w-lg border-gray-600 border-2">
              <div className="md:flex  ">
                <div className="w-full">





                  <div className="flex justify-between items-center p-3">
                    <div className="flex flex-row items-center">
                      <img
                        src="https://i.imgur.com/aq39RMA.jpg"
                        alt="Logo"
                        className="rounded-full w-10"
                      />
                      {/* <div className='rounded-full w-40'></div> */}

                      <div className="flex flex-row items-center ml-2">
                        <span className="font-bold mr-1 text-sm text-white">
                        {val.User.UserId}
                        </span>

                        <small className="h-1 w-1 bg-gray-300 rounded-full mr-1 mt-1"></small>
                        <a
                          href="/"
                          className="text-blue-600 text-sm hover:text-blue-800"
                        >
                          Follow
                        </a>
                      </div>
                    </div>

                    <div className=" flex justify-center">
                      {/* <i className="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i> */}
                      {/* <FontAwesomeIcon
                        className="w-6 text-gray-400 hover:cursor-pointer hover:text-gray-600"
                        icon={faEllipsis}
                      /> */}
                      <Menu placement="right-start">
                        <MenuHandler>
                          <Button className="text-gray-400 background-transparent bg-transparent ">
                            {" "}
                            <FontAwesomeIcon
                              className="w-6 text-gray-400 hover:cursor-pointer hover:text-gray-600"
                              icon={faEllipsis}
                            />
                          </Button>
                        </MenuHandler>
                        <MenuList className="flex flex-col py-0 bg-gray-700 ">
                          <MenuItem className=" bg-gray-700 text-red-500 ">
                            Report 
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </div>
                  </div>
                  <div>
                    {/* <div className='min-w-full h-72'> </div> */}
              
                    <img
                     src={`http://localhost:8000/static/images/${val.Post}`}
                    //  src={`http://localhost:5000/static/images/${job.companylogo}`}
                      alt="Logo"
                      className="w-full max-h-md mh-auto md:max-h-[36rem]"
                    />
                  </div>

                  <div className="pl-2 flex justify-between items-center">
                    <div className="flex flex-row  gap-3">
                      {/* <i className="fa fa-heart-o mr-2 fa-1x hover:text-gray-600"></i>
            <i className="fa fa-comment-o mr-2 fa-1x hover:text-gray-600"></i>
            <i className="fa fa-send-o mr-2 fa-1x hover:text-gray-600"></i> */}
                

{val.likes.indexOf(val.User.email)?
<FontAwesomeIcon className='w-6 text-red-500' icon={faHeart} />:
      <FontAwesomeIcon
      className="w-6 text-white"
      icon={faHeart}
    />
    
}

                      <FontAwesomeIcon
                        className="w-6 text-white"
                        icon={faComment}
                      />
                    </div>

                    {/* <div>
                      <i className="fa fa-bookmark-o fa-1x hover:text-gray-600"></i>
                    </div> */}
                  </div>
                  <p className=" pl-3 text-xs p-2">{val.likes.length}</p>
                  <div className="pl-4 flex gap-4 border-b">
                    <p className="text-base font-bold">faith</p>
                    <p className="text-base">this is awsome</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      placeholder="add Comment"
                      type="text"
                      id="small-input"
                      className="border-none  focus:border-none  block w-full p-2 text-white border   bg-black sm:text-xs   dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                    />

                    <button className=" h-5 w-20 text-white  bg-black hover:text-gray-400 text-sm font-bold">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
     })}
     
        

 

          
          {/* next post   */}
    
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;

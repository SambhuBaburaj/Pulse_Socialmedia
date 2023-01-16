import React from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment, faEllipsis } from "@fortawesome/free-solid-svg-icons";

// import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Newsfeed() {
  return (
    <div className="w-4/6 flex justify-center">
      <div className="w-4/6 ">
        <div className="py-10 bg-gray-900 ">
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
                          Mautic War
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

                    <div className="pr-2">
                      {/* <i className="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i> */}
                      <FontAwesomeIcon
                        className="w-6 text-gray-400 hover:cursor-pointer hover:text-gray-600"
                        icon={faEllipsis}
                      />
                    </div>
                  </div>

                  <div>
                    {/* <div className='min-w-full h-72'> </div> */}
                    <img
                      src="https://i.imgur.com/kOFqgtE.jpg"
                      alt="Logo"
                      className="w-full max-h-md mh-auto md:max-h-[36rem]"
                    />
                  </div>

                  <div className="pl-2 flex justify-between items-center">
                    <div className="flex flex-row  gap-3">
                      {/* <i className="fa fa-heart-o mr-2 fa-1x hover:text-gray-600"></i>
            <i className="fa fa-comment-o mr-2 fa-1x hover:text-gray-600"></i>
            <i className="fa fa-send-o mr-2 fa-1x hover:text-gray-600"></i> */}
                      <FontAwesomeIcon
                        className="w-6 text-white"
                        icon={faHeart}
                      />
                      <FontAwesomeIcon
                        className="w-6 text-white"
                        icon={faComment}
                      />
                    </div>

                    {/* <div>
                      <i className="fa fa-bookmark-o fa-1x hover:text-gray-600"></i>
                    </div> */}
                  </div> 
                  <p className=" pl-3 text-xs p-2">44 likes</p>
                  <div className="pl-4 flex gap-4 border-b">
                  <p className="text-base font-bold">faith</p>
                  <p className="text-base">this is awsome</p>
                  </div>
                  <div className="flex items-center"> 
                  <input placeholder="add Comment" type="text" id="small-input" className="border-none  focus:border-none  block w-full p-2 text-white border   bg-black sm:text-xs   dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "/>
                  
                
                <button className=" h-5 w-20 text-white  bg-black hover:text-gray-400 text-sm font-bold">Post</button>
                
            
                  </div>
                
             
</div>
                 
              </div>
            </div>
          </div>
          {/* next post   */}
          <div className="py-4 px-2">
            <div className="max-w-md mx-auto bg-black shadow-lg rounded-md overflow-hidden md:max-w-lg ">
              <div className="md:flex">
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
                          Mautic War2
                        </span>

                        <small className="h-1 w-1 bg-gray-300 rounded-full mr-1 mt-1"></small>
                        <a
                          href="#"
                          className="text-blue-600 text-sm hover:text-blue-800"
                        >
                          Follow
                        </a>
                      </div>
                    </div>

                    <div className="pr-2">
                      {/* <i className="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i> */}
                      <FontAwesomeIcon
                        className="w-6 text-gray-400 hover:cursor-pointer hover:text-gray-600"
                        icon={faEllipsis}
                      />
                    </div>
                  </div>

                  <div>
                    {/* <div className='min-w-full h-72'> </div> */}
                    <img
                      src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29vbCUyMHBpY3xlbnwwfHwwfHw%3D&w=1000&q=80"
                      alt="Logo"
                      className="w-full max-h-md mh-auto md:max-h-[36rem]"
                    />
                  </div>

                  <div className="p-4 flex justify-between items-center">
                    <div className="flex flex-row items-center gap-3">
                      {/* <i className="fa fa-heart-o mr-2 fa-1x hover:text-gray-600"></i>
            <i className="fa fa-comment-o mr-2 fa-1x hover:text-gray-600"></i>
            <i className="fa fa-send-o mr-2 fa-1x hover:text-gray-600"></i> */}
                      <FontAwesomeIcon
                        className="w-6 text-white"
                        icon={faHeart}
                      />
                      <FontAwesomeIcon
                        className="w-6 text-white"
                        icon={faComment}
                      />
                    </div>

                    <div>
                      <i className="fa fa-bookmark-o fa-1x hover:text-gray-600"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 px-2">
            <div className="max-w-md mx-auto bg-black shadow-lg rounded-md overflow-hidden md:max-w-lg">
              <div className="md:flex">
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
                          Mautic War
                        </span>

                        <small className="h-1 w-1 bg-gray-300 rounded-full mr-1 mt-1"></small>
                        <a
                          href="#"
                          className="text-blue-600 text-sm hover:text-blue-800"
                        >
                          Follow
                        </a>
                      </div>
                    </div>

                    <div className="pr-2">
                      {/* <i className="fa fa-ellipsis-h text-gray-400 hover:cursor-pointer hover:text-gray-600"></i> */}
                      <FontAwesomeIcon
                        className="w-6 text-gray-400 hover:cursor-pointer hover:text-gray-600"
                        icon={faEllipsis}
                      />
                    </div>
                  </div>

                  <div>
                    {/* <div className='min-w-full h-72'> </div> */}
                    <img
                      src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                      alt="Logo"
                      className="w-full h-75"
                    />
                  </div>

                  <div className="p-4 flex justify-between items-center">
                    <div className="flex flex-row items-center gap-3">
                      {/* <i className="fa fa-heart-o mr-2 fa-1x hover:text-gray-600"></i>
            <i className="fa fa-comment-o mr-2 fa-1x hover:text-gray-600"></i>
            <i className="fa fa-send-o mr-2 fa-1x hover:text-gray-600"></i> */}
                      <FontAwesomeIcon
                        className="w-6 text-white"
                        icon={faHeart}
                      />
                      <FontAwesomeIcon
                        className="w-6 text-white"
                        icon={faComment}
                      />
                    </div>

                    <div>
                      <i className="fa fa-bookmark-o fa-1x hover:text-gray-600"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;

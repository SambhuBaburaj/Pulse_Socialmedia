import React, { useEffect, useRef, useState } from "react";
import { Chat, SearchUsers } from "../../../Api/APIcalls";
import { ChatState } from "../../../hooks/ChatProvider";
function SearchBar() {
  const { User,setSelectedChat,Chats, setChats } = ChatState();

  const [SearchUser, setSearchUser] = useState(false);
  const [UserName, setUserName] = useState("");
  const [searchUserResult, setSearchUserResult] = useState([]);

  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setSearchUser(false);
      setUserName("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (UserName.length > 0) {
      // console.log(localStorage.getItem('user'));
      // const UserInfo=localStorage.getItem('user')
      const UsersFound = SearchUsers(UserName).then((data) => {
        data.data
          ? setSearchUserResult(data.data.Users)
          : setSearchUserResult([]);

        if (data.data.Users) setSearchUser(true);
        else setSearchUser(false);
      });
      setSearchUser(true);
    } else {

      setSearchUser(false);
    }
  }, [UserName]);



  const AccessChat = async (UserId) => {
    try {
      console.log('hello');
      const { data } = await Chat(UserId);
      console.log('eoirg');
      setSelectedChat(data);
    } 
    catch (err) {
      console.log(err);
    }
  };


  
  return (
    <div>
      <div className="flex justify-between">
        <strong className=" p-3 flex justify-center">Messages</strong>
        <div ref={ref} class="">
          <div class="inline-flex flex-col justify-center relative text-gray-500 w-48">
            <div class="search-container">
              <input
                value={UserName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                class="search expandright"
                id="searchright"
                type="search"
                name="q"
                placeholder="Search"
              />
              <label class="button searchbutton" for="searchright">
                <span class="mglass">&#9906;</span>
              </label>
            </div>
            {SearchUser ? (
              <ul class="bg-white border border-gray-100 w-full mt-2 ">
                {searchUserResult.map((value, key) => {
                  return (
                    <li
                      onClick={()=>
                      {
                        AccessChat(value._id)
                      }}
                      class="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900"
                    >
                      <div className="flex justify-start">
                        <img
                          className="rounded-full w-6"
                          src={`http://localhost:8000/static/images/${value.profileImage}`}
                          alt=" "
                        />
                        <b>{value.username}</b>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

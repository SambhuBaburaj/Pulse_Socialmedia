import React, { useEffect, useState } from "react";
import { getChat } from "../../../Api/APIcalls";
import { ChatState } from "../../../hooks/ChatProvider";
import SearchBar from "./SearchBar";
function ChatNames() {
const [loggedUser, setloggedUser] = useState ()
  const { User,setSelectedChat,Chats, setChats } = ChatState();

const{data}= getChat()
setChats(data)

useEffect(()=>
{
setloggedUser(JSON.parse(localStorage.getItem('user')))
},[])

  return (
    <div className="  h-screen bg-orange-500  w-2/6">
      <div className=" h-14 w-full bg-red-500  ">
   <SearchBar/>
        
      </div>

      <div className="bg-green-500  w-full border-solid border">
        <div className="flex items-center">
          <img
            className="rounded-full w-20 p-3"
            src="https://i.imgur.com/aq39RMA.jpg"
            alt=" "
          />
          <div>
            <strong>anagha</strong>
            <div>sdgfwe</div>
          </div>
        </div>
      </div>
      <div className="bg-green-500  w-full">
        <div className="flex items-center">
          <img
            className="rounded-full w-20 p-3"
            src="https://i.imgur.com/aq39RMA.jpg"
            alt=" "
          />
          <div>
            <strong>Anagha</strong>
            <div>sdgfwe</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatNames;

import React from 'react'
import { BiPhoneCall } from "react-icons/bi";

function ChatMessages() {
  return (
    <div className="bg-yellow-400 h-screen w-4/6 ">

    <div className="h-14 bg-teal-400">
      <div className="flex items-center justify-between">
      <div className="flex items-center ">
    <img
                        className="rounded-full w-16 p-3"
                        src="https://i.imgur.com/aq39RMA.jpg"
                        alt=" "
                      />
    <strong>Anagha</strong>
    
    </div>
    < BiPhoneCall className="text-3xl mr-5 cursor-pointer"/>
    
      </div>
    
    </div>
    
    
                </div>
  )
}

export default ChatMessages
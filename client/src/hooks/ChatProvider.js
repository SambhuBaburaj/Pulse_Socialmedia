import {createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const ChatContext=createContext()
const ChatProvider=({children})=>
{
    const Navigate=useNavigate()
    const [User,setUser]=useState()
    const [SelectedChat, setSelectedChat] = useState()
    const [Chats, setChats] = useState([])

useEffect(()=>
{
    const UserInfo=JSON.parse(localStorage.getItem('User'))
    setUser(UserInfo)
    if(!UserInfo)
    {
    
     Navigate('/')   
    }
},[])

    return (<ChatContext.Provider value={{User,setUser,SelectedChat, setSelectedChat,Chats,setChats}}>
        {children}
        </ChatContext.Provider>)
}
export const ChatState=()=>
{
    return useContext(ChatContext)
}
export default ChatProvider
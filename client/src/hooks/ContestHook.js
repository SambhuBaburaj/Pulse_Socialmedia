import React, { createContext, useEffect, useState } from 'react'
import  {NewsFeed}  from '../Api/APIcalls'
import UserInstance from '../Api/Axios'

 function ContestHook({children}) {
const [UploadMedia,SetUploadMedia]=useState('')
// let feedData
// const feed=NewsFeed().then((data)=>
// {
//   feedData=data
// })
// console.log(feedData);
// useEffect(()=>
// {
//   SetUploadMedia(feedData)
// },[0])
// console.log(feed);

  return (<ModelContest.Provider value={{UploadMedia}}>
{children}
  </ModelContest.Provider>


  )
}
export const ModelContest=createContext()
export default ContestHook
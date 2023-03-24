import React, { createContext,  useState } from 'react'


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
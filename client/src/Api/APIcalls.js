import UserInstance from "./Axios";
import UserMediaInstance from "./MediaAxios";

export const SharePost = async (data) => {
  await UserMediaInstance.post("/ShareMedia", data);
};

 export const NewsFeed = async()=> {
   return await UserInstance.get('/NewsFeed')
};
export const SearchUsers=async(User)=>
{
  return await UserInstance.get(`/SearchUser?search=${User}`)
}
export const Chat=async(data)=>
{
  
  return await UserInstance.post('/chat',data)
}
export const  getChat=async()=>
{
return await UserInstance.get('/getChat')
}
// export {NewsFeed}

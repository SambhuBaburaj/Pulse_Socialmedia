import UserInstance from "./Axios";
import UserMediaInstance from "./MediaAxios";

export const SharePost = async (data) => {
  await UserMediaInstance.post("/ShareMedia", data);
};

 export const NewsFeed = async()=> {
   return await UserInstance.get('/NewsFeed')
};
// export {NewsFeed}
const { UserPostSchema } = require("../../model/UserData");

const NewsFeed=async (req,res)=>
{
console.log('esroisgs');
const feed=await UserPostSchema.find().populate('User')
console.log(feed);
res.json({feed})
}
module.exports={NewsFeed}
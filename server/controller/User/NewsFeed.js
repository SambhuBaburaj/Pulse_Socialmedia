const { UserPostSchema } = require("../../model/UserData");

const NewsFeed=async (req,res)=>
{

const feed=await UserPostSchema.find().populate('User')

res.json({feed})
}
module.exports={NewsFeed}
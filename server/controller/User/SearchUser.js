const { UsersData } = require("../../model/UserData");

const SearchUser=async (req,res)=>
{

    let regex = new RegExp(req.query,'i');

const Users =await UsersData.find({$or:[{username:{ $regex: req.query.search, $options: "i" }},{ UserId:{ $regex: req.query.search, $options: "i" }}]},(e,s)=>
{


}).clone()
res.json({Users})
}
module.exports={ SearchUser}
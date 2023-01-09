
const mongoose=require("mongoose");

const User=new mongoose.Schema({

    username:String,
    UserId:String,
    email:String,
    password:String,
    createdOn:Date,
    profileImage:String,
    followers:Array,
    following:Array,
    blocked:Boolean
})
const UsersData=mongoose.model("UserData",User)
module.exports={UsersData} 
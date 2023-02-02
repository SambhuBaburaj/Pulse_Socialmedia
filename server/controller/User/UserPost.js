const multer = require("multer");
const { UsersData } = require("../../model/UserData");

const MongoUser=require('../../model/UserData')
const jwt =require('jsonwebtoken')
const { ObjectId } = require("mongodb");
const { default: mongoose } = require("mongoose");


const ShareMedia=async (req,res)=>
{
try
    {
    
        const token=req.headers.authorization.split(" ")[1]
        jwt.verify(token,process.env.accessToken,async(err,data)=>
        {
          if(err)
          {
            console.log('second fail');
            // console.log(err);
        res.status(200).json({user:401})
          
          }
        else{
 
    
//             const UserId=ObjectId(data._id)
//             console.log(UserId);
//             console.log(req.body);
//             UsersData.findOneAndUpdate({_id:UserId},{ $push: {post:[{
//                 PostDisc:req.body.PostDIsc,
//                 Media:req.file.filename,
// likes:[],
// comments:[]
//             }]}},(err,s)=>
//             {
//                 console.log(s);
//             })


// res.json(true)


const post =new MongoUser.UserPostSchema({
    User:data._id,
    Post:req.file.filename,
    likes:[], 
    comments:[]
})
post.save()
// console.log(await MongoUser.UserPostSchema.find({_id:'63db8f73f278809b2803776b'}).populate('User'));
res.json(true)

        } 
        })


}
catch(err)
{
    console.log(err);
}
}

module.exports={ShareMedia} 
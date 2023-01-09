const User=require('../../model/UserData')
const bcrypt=require('bcrypt')
const RegisterUser=async (req,res)=>
{
const UserId=await User.UsersData.findOne({  UserId:req.body.UserId})
const Email=await User.UsersData.findOne({email:req.body.Email})

console.log(UserId);

if(UserId)
{
res.json({User:'UserId_failed'})
}
else if(Email)
{
res.json({User:'EmailId_failed'})

}
else{


    const HashedPassword=await bcrypt.hash(req.body.password,10)
console.log(req.body);
const UserRegister=new User.UsersData({
    username:req.body.userName,
    UserId:req.body.UserId,
    password:HashedPassword,
    email:req.body.Email,
    createdOn:new Date(),
    blocked:false

},(e,s)=>
{
    console.log(s);
})
UserRegister.save()

res.json({
    user:'success'
})
}

 


}
module.exports={RegisterUser}  
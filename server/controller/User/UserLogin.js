const UserData=require('../../model/UserData').UsersData
const bcrypt=require('bcrypt')
var jwt = require('jsonwebtoken');

const UserLogin=async (req,res)=>
{
const User=await UserData.findOne({email:req.body.Email})

let PassCheck
if(User)
{
 PassCheck=await bcrypt.compare(req.body.password,User.password)

} 

if(!User)
{
    //send no user found
    res.status(401).json(false)
}
else if(!PassCheck)
{
    res.status(401).json(false)
    //send no user found

}
else if(User.blocked)
{
    res.status(403).json(false)

    //user is blocked
}
else{
    const accessToken =jwt.sign(User.toJSON(),process.env.accessToken,{expiresIn:'20d'})

    res.status(200).json({User,accessToken} )
    //successfully logged in
}

}
module.exports={UserLogin}
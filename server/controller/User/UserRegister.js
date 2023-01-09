const User=require('../../model/UserData')
const bcrypt=require('bcrypt')
const otplib = require('otplib');
const nodemailer = require('nodemailer');
const authenticator =require('otplib') ;
let otp
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

   
    // await transporter.sendMail({
    //     from: '"Pulse" sambhubaburaj007@gmail.com',
    //     to: 'sambhubaburaj513@gmail.com',
    //     subject: 'OTP Verification',
    //     text: `Your OTP is ${otp}`
    //   });



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

const EmailConfirm=async(req,res)=>
{


    const UserId=await User.UsersData.findOne({  UserId:req.body.UserId})
    const Email=await User.UsersData.findOne({email:req.body.Email})
    
    console.log(UserId);
    console.log(Email);
    if(UserId)
    {
    res.json({User:'UserId_failed'})
    }
    else if(Email)
    {
    res.json({User:'EmailId_failed'})
    
    }
    else{




        let transporter = nodemailer.createTransport({
            service:'gmail',
           
              // true for 465, false for other ports
             auth: {
               user: 'sambhubaburaj007@gmail.com',
               pass: 'bozjexessgfldcfz'
             },
             tls: {
                 rejectUnauthorized: false,
               }
           });
     
     
     
     
     
     
         const secret = otplib.authenticator.generateSecret();
         otp = otplib.authenticator.generate(secret);




            let info = await transporter.sendMail({
        from:' sambhubaburaj007@gmail.com',
        to: 'sambhubaburaj513@gmail.com',
        subject: "Pulse",
        text: `Your one time password is ${otp}`,
      });

      res.json(true)
    }

    
}


const OTPConfirm=(req,res)=>
{
    console.log('ergkuesngri`');


    
console.log(req.query );


try{
   

   if(req.query.OTPvalue==otp)
  {  
    
    console.log('seccuess');

    //otp success
}
  else{
console.log('errorrrr');
//otp failed
  }
}
catch(err)
{
console.log(err); 
}
}
module.exports={RegisterUser,EmailConfirm,OTPConfirm}   
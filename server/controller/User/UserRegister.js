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
               user: 'pulse.messenger.io@gmail.com',
               pass: 'mrmylndgjjvyttvf'
             },
             tls: {
                 rejectUnauthorized: false,
               }
           });
     
     
     
         const secret = otplib.authenticator.generateSecret();
         otp = otplib.authenticator.generate(secret);


const user=req.body.Email.toString() 
            let info = await transporter.sendMail({
        from:'pulse.messenger.io@gmail.com',
        to: user,
        subject: "Pulse",
        text: `Your one time password is ${otp}`,
      });

      res.json(true)
    }

    
}


const OTPConfirm=(req,res)=>
{
   


    


try{
   

   if(req.query.OTPvalue==otp)
  {  
    
    console.log('success');

    //otp success
    res.status(200).json(true)
}
  else{
console.log('error');
res.status(403).json(false)
//otp failed
  }
}
catch(err)
{
console.log(err); 
}
}
module.exports={RegisterUser,EmailConfirm,OTPConfirm}   
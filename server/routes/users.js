var express = require('express');
const  UserLogin  = require('../controller/User/UserLogin');
var router = express.Router();
const path = require("path");
const UserRegister=require('../controller/User/UserRegister')  
const UserPost=require('../controller/User/UserPost');
// const  {MulterFilerHandler}  = require('../controller/User/MulterHandeler');
/* GET users listing. */
const MulterControl=require('../controller/User/MulterUpload');
const { NewsFeed } = require('../controller/User/NewsFeed');
const JWTvarify = require('../controller/User/JWTvarification');
const { SearchUser } = require('../controller/User/SearchUser');
const AccessChat=require('../controller/User/AccessChat')

router.post('/signup',UserRegister.RegisterUser);
router.post('/login',UserLogin.UserLogin)
router.post('/otp',UserRegister.EmailConfirm)
router.get('/confirmOTP',UserRegister.OTPConfirm)
router.post('/ShareMedia',MulterControl.imagesUpload,UserPost.ShareMedia)
router.get('/NewsFeed',JWTvarify,NewsFeed)
router.get('/SearchUser',JWTvarify,SearchUser)
router.get('/chat',(req,res)=>
{
    console.log(req.body);
    console.log('reasgfeasgrebebb');
    res.json(true)
})
module.exports = router; 

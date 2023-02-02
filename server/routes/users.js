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


router.post('/signup',UserRegister.RegisterUser);
router.post('/login',UserLogin.UserLogin)
router.post('/otp',UserRegister.EmailConfirm)
router.get('/confirmOTP',UserRegister.OTPConfirm)
router.post('/ShareMedia',MulterControl.imagesUpload,UserPost.ShareMedia)
router.get('/NewsFeed',NewsFeed)
module.exports = router; 

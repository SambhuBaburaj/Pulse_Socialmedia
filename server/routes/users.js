var express = require('express');
const  UserLogin  = require('../controller/User/UserLogin');
var router = express.Router();
const UserRegister=require('../controller/User/UserRegister')  
/* GET users listing. */
router.post('/signup',UserRegister.RegisterUser);
router.post('/login',UserLogin.UserLogin)
router.post('/otp',UserRegister.EmailConfirm)
router.get('/confirmOTP',UserRegister.OTPConfirm)
module.exports = router;

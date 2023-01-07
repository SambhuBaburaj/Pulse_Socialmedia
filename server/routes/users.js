var express = require('express');
var router = express.Router();

const UserRegister=require('../controller/User/UserRegister')  
/* GET users listing. */
router.post('/signup',UserRegister.RegisterUser, function(req, res, next) {
console.log('hi');
res.json(true)
});

module.exports = router;

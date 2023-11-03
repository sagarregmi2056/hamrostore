var express = require('express')
const{ getUserById, getUser} = require('../controller/user.controller');
const { isSignedIn, isAuthenticated } = require('../controller/auth.controller');


var router = express.Router();

router.use('userId',getUserById);
router.get('/:userid',isAuthenticated,isSignedIn,getUser);


module.exports= router;
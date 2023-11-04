var express = require('express')
const{ getUserById, getUser} = require('../controller/user.controller');
const { isSignedIn, isAuthenticated } = require('../controller/auth.controller');


var router = express.Router();

router.param('userid',getUserById);
router.get('/:userid',isSignedIn,isAuthenticated,getUser);


module.exports= router;
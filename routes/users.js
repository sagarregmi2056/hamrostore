var express = require('express')

const{ getUserById, getUser, getAllUsers} = require('../controller/user.controller');
const { isSignedIn, isAuthenticated } = require('../controller/auth.controller');


var router = express.Router();

router.param('userId',getUserById);
router.get('/:userId',isSignedIn,isAuthenticated,getUser);

router.get('/users/:userId', isSignedIn, isAuthenticated, getAllUsers)
module.exports= router;
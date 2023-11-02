const express = require('express');
const { signup, signin } = require('../controller/auth.controller');
const { check } = require('express-validator');
const router = express.Router()


router.post('/signup',[
    check('name', 'name is required').isLength({
        min: 3,
    }),
    check('email', 'email is required').isEmail(),
    check('password', 'Password should be at least 6 character').isLength({
        min: 6,
    })
],signup)



router.post('/signin',[
    
    check('email', 'email is required').isEmail(),
    check('password', 'Password should be at least 6 character').isLength({
        min: 6,
    })
],signin)


module.exports = router

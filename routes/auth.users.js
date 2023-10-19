const express = require('express');
const { signup } = require('../controller/user.controller');
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


module.exports = router

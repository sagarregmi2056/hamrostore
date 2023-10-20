const User = require('../models/users')
const { validationResult } = require('express-validator');

require('dotenv').config();

const jwt = require('jsonwebtoken');



exports.signup = async (req,res)=>{
        

    

    const errors = validationResult(req);

    // check is empty
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg,
        });
    }
    try{
        const user = new User(req.body);
        const createdUser = await user.save()
        res.json({message :'signup sucess',_id: createdUser._id});

    }catch(err){
        console.log(err);
        return res.status(400).json({error: err.message|| 'unable to save user to the db'})
    }
}


exports.signin = async (req,res)=>{
        

    

    const errors = validationResult(req);

    // check is empty
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg,
        });
    }
    try{


        // body bata email password extract garya
       const {email,password}= req.body;

    //    email search garxa suru ma jun chai user variable ma set xa

       const user = await User.findOne({email}).exec()

    //    user xaina vanya

       if(!user){
        return res.status(400).json({error: 'user not found'})
       }


    //    password match garyana vanya
       if(!user.authenticate(password)){
        return res.status(400).json({error: 'Email or password Invalid'})
       }


    //    aba jwt generate garna parxa 

    const token = jwt.sign(
        {
            _id:user._id,
            exp:Math.floor(Date.now()/1000)+86400
        },process.env.SECRET)
        // we dont want to send users password hash to frontend soo we are sending undefined
        user.hash_password=undefined


        res.json({message:'Login sucessful',token,user})


    }catch(err){
        console.log(err);
        return res.status(400).json({error: err.message|| 'unable to login error found'})
    }
}
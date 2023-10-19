const User = require('../models/users')
const { validationResult } = require('express-validator');


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
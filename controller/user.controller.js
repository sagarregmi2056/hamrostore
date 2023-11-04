const User = require('../models/users')

exports.getUserById = async (req,res,next,id)=>{


    try{
        const user = await User.findById(id)
        if(!user){
            return res.this.status(400).json({error:'No user found '});
        }
        req.user=user;
        next();

    }catch (err){
        return res.status(400).json({error:err?.message || 'No user found on database '})
    }
}

exports.getUser=  (req,res)=>{
    req.user.hash_password = undefined;
    return res.json(req.user);
}
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        return res.status(400).json({ error: err?.message || 'No User found' });
    }
}
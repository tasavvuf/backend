const userModel = require("../model/user.model.js")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs") 
const regUser = async (req,res) => {
    const {username,email,password,role} = req.body
    if(!username){
        return res.status(400).json({message:"username is required"})
    }
    if(!email){
        return res.status(400).json({message:"email is required"})
    }
    
    if(!password){
        return res.status(400).json({message:"password is required"})
    }
    
    const isExist = await userModel.findOne({$or:[{username},{email}]})
    if(isExist){
        return res.status(409).json({message:"User already exists with either same username or email"})
    }
    const hash = await bcrypt.hash(password,10)
    const user = await userModel.create({username,email,password:hash,role})
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
    res.cookie("token",token)
    res.status(201).json({message:"user created and token stored",data:{username,password}
    })
}
const logUser = async (req,res) => {
    const {username,email,password} = req.body
 
    if(!email && !username ){
        return res.status(400).json({message:"email/username is required"})
    }
    
    if(!password){
        return res.status(400).json({message:"password is required"})
    }
    
    const user = await userModel.findOne({$or:[{username},{email}]})
  if(!user){   
         return res.json({message:"wrong email and password"})
}
    const verify = await bcrypt.compare(password,user.password)
    if(!verify) {
        return res.json({message:"wrong password"})
    }
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
    res.cookie("token",token)
    res.json({message:"user logedin and token stored"
    })
}

module.exports = {
    regUser , logUser
}
const userModel = require("../model/user.model.js")
const jwt = require("jsonwebtoken")

 const regUser = async (req,res) => {
    
   const  {userName , email ,password }=req.body
   const isEXits = await userModel.findOne({ email })
   if(isEXits){
    return res.status(400).json({message:"user already exists"})
   }
   const user = await userModel.create({ userName, email, password })
   
   const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
   res.cookie("token", token)
   res.status(201).json({message:"user created and token genrated in cookies ", user})
 }
 module.exports = {regUser}

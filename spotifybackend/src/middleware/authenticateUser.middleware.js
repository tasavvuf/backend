const jwt = require("jsonwebtoken")
const userModel = require("../model/user.model")

const authenticateUser = async (req, res, next) => {
    const token = req.cookies.token
    if(!token){
        return res.status(401).send("you are not a user log in / register ")
    }
    try {
        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        const user =  await userModel.findById(decoded.id) 
        if(!user){
            return res.status(401).send("Invalid token")
        }
        req.user = user
        req.userid = user._id
        next()
    } catch (error) {
        return res.status(401).send("Invalid token")
    }
}

module.exports = authenticateUser

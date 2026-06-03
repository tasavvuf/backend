const express = require("express")
const authController = require("../controllers/auth.controller.js")
const router  = express.Router()
const jwt = require("jsonwebtoken")
const userModel = require("../model/user.model.js")

router.post("/reg",authController.regUser)  
router.get("/test", async (req,res)=>{
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({message:"token cookie is missing"})
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const data = await userModel.findById(decoded.id)
        return res.json(data)
    } catch (error) {
        return res.status(401).json({message:"token is not verifeid"})
    }
})
module.exports = router

const express = require("express")
const authController = require("../controllers/auth.controller.js")
const router  = express.Router()

router.post("/reg",authController.regUser)  
module.exports = router

const express = require("express")
const router  = express.Router()
const authController = require("../controllers/auth.controller.js")
router.post("/reg", authController.regUser)
router.post("/login",authController.logUser)
module.exports = router
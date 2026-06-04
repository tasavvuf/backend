const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const authroute = require("./router/auth.routes")
app.use(cookieParser())
app.use(express.json())
require("dotenv").config()
app.get("/",(_,res)=>{
    res.send("welcome to server")
})
app.use("/api/auth",authroute)
module.exports = app

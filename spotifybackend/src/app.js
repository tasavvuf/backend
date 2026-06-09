const express = require("express")
const app = express()
require("dotenv").config()
const cookieParser = require("cookie-parser")
const authroute = require("./router/auth.routes")
const musicRoute = require("./router/music.routes")
app.use(cookieParser())
app.use(express.json())

app.get("/",(_,res)=>{
    res.send("welcome to server")
})
app.use("/api/auth",authroute)
app.use("/api",musicRoute)
module.exports = app

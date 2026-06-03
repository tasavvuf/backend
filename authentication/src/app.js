const e = require("express");
const authRoutes = require("./routes/auth.route.js")
const app = e(); 
const cookieParser = require("cookie-parser")
app.use(cookieParser())
app.use(e.json())
app.use("/api/auth",authRoutes)
app.get("/", (req, res) => {
  res.send("welcome to server")
})
module.exports =  app 
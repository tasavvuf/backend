const mongoose = require("mongoose")
const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("welcome to server ")
})
async function conectDB() {
    await mongoose.connect("mongodb+srv://.../newdb")
    console.log("db has been connected ")
}
app.listen(5000,()=>{
    console.log("server is running on port http://localhost:5000 ")
})
const express = require("express")
const app = express()
app.get("/api/greet/:name",(req,res)=>{
  const { name } = req.params
    res.json({ message: `Hello ${name}` })
})
app.get("/api/square/:number",(req,res)=>{
    const { number } = req.params
    res.json({
        number : number,
        square : number*number
    })
})
app.get("/api/repeat/:word/:times",(req,res)=>{
    const { word , times} = req.params
    res.json({message : `the ${word} is reapeted ${times} times`})
})
app.get("/api/calculate",(req,res)=>{
    const { num1 , num2 , op } = req.query
    let result 
    if(op==="add") result = Number(num1) + Number(num2)
    else if(op==="substation") result = Number(num1) - Number(num2)
    else result = Number(num1) / Number(num2)
    res.json({num1,num2,op,result})
}) 
app.listen(5000,()=>{
    console.log("server is running on port http://localhost:5000")
})

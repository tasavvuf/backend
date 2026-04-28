const express = require("express")
const exampleModel = require("./model/example.model")
const app = express();
app.use(express.json());

app.get("/",(_,res)=>{
    res.send("welcome to server")
})
app.get("/p",async (req,res)=>{
    const products =  await exampleModel.find()
    res.json( products)
})
app.post("/p",async (req,res)=>{
   
   let { name, price } = req.body

    await exampleModel.create({name , price })
    res.json({message : "created "})
})
app.get("/p/:id",async(req,res)=>{
    const _id = req.params.id
    const product =  await exampleModel.findById({_id})
    res.json(product)
})
app.put("/p/:id", async (req,res) => {
    const _id = req.params.id
    const upadted = await exampleModel.findOneAndUpdate({_id},req.body,{ new: true })
    res.json({message:"updated",upadted})
})
app.delete("/p/:id",async (req,res)=>{
    const _id = req.params.id
    const deleted = await exampleModel.findOneAndDelete({_id})
    res.json({message:"deleted",deleted})
})
module.exports = app

const express = require("express")
const notesModel = require("./models/notes.model")
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.send("welcome to server")
})
app.get("/notes", async (req, res) => {
    const notes = await notesModel.find()
    res.json(notes)
})
app.put("/notes/:id", async (req,res) => {
    const id = req.params.id
            const edit  = await notesModel.findByIdAndUpdate({_id:id},req.body,{ new: true } )
            res.json({message:"updated"})

    
})
app.delete("/notes/:id",async(req,res)=>{
        const id = req.params.id
        const deleted = await notesModel.findOneAndDelete({_id:id})
        res.json({message:"deleted"})
})
app.get("/notes/:id",async (req,res)=>{
    const id = req.params.id
    const note = await notesModel.findOne({_id:id})
    res.json(note)
})
app.post("/notes", async (req, res) => {
    const notes = await notesModel.find()
  const { title, description } = req.body
  const id = notes.length
    await notesModel.create({
        id,title,description
    })
    res.json({message : " created"})
})

module.exports = app

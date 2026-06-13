const express = require("express")
const router  = express.Router()
const multer = require("multer")
const jwt = require('jsonwebtoken')
const albumModel = require("../model/album.model.js")
const userModel = require("../model/user.model.js")
const { uploadMusic } = require("../controllers/music.controller.js")
const upload = multer({storage:multer.memoryStorage()})
router.post("/upload",upload.single("music"), uploadMusic)
router.post("/add-album", async (req, res) => {
    const { title, songs  } = req.body
    const token = req.cookies.token
    if(!token){
        return res.status(401).send("you are not a user log in / register ")
    }
  
        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        const user =  await userModel.findById(decoded.id) 
        if(user.role !== "artist"){
            return res.status(403).json({
                message:"Only artists can add songs to album"
            })
        }
        const album = await albumModel.create({
            title: title,
            artist: user._id,
            songs: songs ,
        })
         res.status(201).json({
        message: "Album created successfully",
        album
    })
    // } catch (error) {
    //     return res.status(401).send("Invalid token")
    // }

   
})
module.exports = router
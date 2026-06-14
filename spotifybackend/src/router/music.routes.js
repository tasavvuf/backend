const express = require("express")
const router  = express.Router()
const multer = require("multer")
const jwt = require('jsonwebtoken')
const albumModel = require("../model/album.model.js")
const userModel = require("../model/user.model.js")
const { uploadMusic } = require("../controllers/music.controller.js")
const upload = multer({storage:multer.memoryStorage()})
const  authenticateUser = require("../middleware/authenticateUser.middleware.js")
const requireArtist = require("../middleware/requireArtist.middleware.js")
const { getMusic } = require("../controllers/getAllmusic.controller.js")
router.post("/upload", authenticateUser, requireArtist , upload.single("music"), uploadMusic)
router.post("/add-album", authenticateUser, requireArtist , async (req, res) => {
    const { title, songs  } = req.body
  
        const album = await albumModel.create({
            title: title,
            artist: req.userid,
            songs: songs ,
        })
         res.status(201).json({
        message: "Album created successfully",
        album
    }) 
})
  router.get("/music",authenticateUser, getMusic )

module.exports = router

const express = require("express")
const router  = express.Router()
const multer = require("multer")
const { uploadMusic } = require("../controllers/music.controller.js")
const upload = multer({storage:multer.memoryStorage()})
router.post("/upload",upload.single("music"), uploadMusic)
module.exports = router
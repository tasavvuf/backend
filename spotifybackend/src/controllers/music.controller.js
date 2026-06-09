const musicModel = require("../model/music.model.js");
const userModel = require("../model/user.model")
const imagekit = require("../service/imagekit.service.js");
const jwt = require('jsonwebtoken')
async function uploadMusic(req, res) {
  const { tittle } = req.body;
  const file = req.file;
  const token = req.cookies.token
  if (!token) {
    return res.status(401).send("you are no a user log in / register ")
  }
  try {
   const decoded = jwt.verify(token , process.env.JWT_SECRET)
   const user =  await userModel.findById(decoded.id) 
   if(user.role !== "artist"){
    return res.status(403).json({
        message:"Only artists can upload songs"
    })
}
    
  if(!file){
    return res.status(400).send("no file added ")
  }
  if (!file.mimetype.startsWith("audio/")) {
    return res.send("Only audio allowed");
  }
  const base64 = file.buffer.toString("base64");
  
    const result = await imagekit.files.upload({
      file: base64,
      fileName : file.originalname 
    });
   
    const data =  await musicModel.create({
        title : result.name,
        uri : result.url , 
        duration : result.duration,
        artist : decoded.id
    })
    res.json({data})
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = {
  uploadMusic,
};

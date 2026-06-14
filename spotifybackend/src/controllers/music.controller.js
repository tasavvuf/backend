const musicModel = require("../model/music.model.js");
const imagekit = require("../service/imagekit.service.js");
async function uploadMusic(req, res) {
  const title = req.body.title || req.body.tittle;
  const file = req.file;
  try {
 
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
        title : title,
        uri : result.url , 
        duration : result.duration,
        artist : req.userid
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

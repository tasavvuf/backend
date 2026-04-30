const express = require("express")
const postModel = require("./model/post.model")
const app = express()
const uploadMedia = require("./service/storage.service")
const multer  = require('multer')
const cors = require("cors");
app.use(cors());
const upload = multer({ storage: multer.memoryStorage() });
app.get("/",(_,res)=>{
    res.send("welcome to server")
})
app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const caption = req.body.caption; 
    const result = await uploadMedia({
      file: req.file.buffer.toString("base64"),
      fileName: req.file.originalname,
    });
   const post = await postModel.create({
  image_url: result.url,
  caption,
});
    res.json({
      message: "Upload successful and added to db",
      url: result.url,
      fileId: result.fileId,
      post
    });

  } catch (err) {
    console.error("UPLOAD ERROR:", err);
    res.status(500).json({ error: "Upload failed" });
  }
  
});
app.get("/posts", async (_, res) => {
  try {
    const posts = await postModel.find();
    res.json(posts);
  } catch (err) {
    console.error("FETCH POSTS ERROR:", err);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});
module.exports = app
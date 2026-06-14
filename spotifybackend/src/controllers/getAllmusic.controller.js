const musicModel = require("../model/music.model")
const getMusic = async (req,res) => {
    const songs = await musicModel.find().populate("artist", "username")
    res.status(200).json({
        message: "songs fetched successfully",
        songs
    })
  }
  module.exports = { getMusic }
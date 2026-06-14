const albumModel = require("../model/album.model.js")

const getAlbum = async (req, res) => {
    const albums = await albumModel.find().populate("songs")
    res.status(200).json({
        message: "Albums fetched successfully",
        albums
    })
}

module.exports = getAlbum
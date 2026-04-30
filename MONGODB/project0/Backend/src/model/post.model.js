const { default: mongoose } = require("mongoose")

const postSchema = new mongoose.Schema({
    image_url:String,
    caption:{type:String , default : " no_caption_given "},
    upload_date:{type:Date, default:Date.now}
})
const postModel = mongoose.model("post",postSchema)
module.exports = postModel
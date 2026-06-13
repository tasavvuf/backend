const mongoose =  require("mongoose")

const albumSchema = new mongoose.Schema({
    title:{type:String,required:true,trim: true},
    artist:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    songs:[{type:mongoose.Schema.Types.ObjectId,ref:"Music"}],
    createdAt:{type:Date,default:Date.now},
  
})
const albumModel = mongoose.model("Album",albumSchema)
module.exports = albumModel
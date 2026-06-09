const mongoose = require("mongoose")

const musicSchema = new mongoose.Schema({
    title:{type:String,required:true,trim: true},
    uri:{type:String , required : true},
    duration: { 
        type: Number,   
        default: 0 },
    artist:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    createdAt:{type:Date,default:Date.now},
  
})
const musicModel = mongoose.model("Music",musicSchema)
module.exports = musicModel
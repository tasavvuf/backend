const { default: mongoose } = require("mongoose")

const blogSchema = new mongoose.Schema({
    title : {type: String,required: [true, "title is required"],
    minlength: [5, "title must be at least 5 characters"]}, 
    content : {type: String,      required: [true, "title is required"],
    minlength: [5, "title must be at least 5 characters"]},
    author : {type: String, required: true },
    tags: [String],
    published : {type : Boolean , default : false} ,
    createdAt: {type:Date , default : Date.now}
})

const blogModel = mongoose.model("blog",blogSchema)

module.exports = blogModel
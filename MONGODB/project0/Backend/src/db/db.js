const { default: mongoose } = require("mongoose")
require("dotenv").config()
const connectDB = async ()=>{ await mongoose.connect(process.env.DB_URI)
    console.log("db connected")
}
module.exports = connectDB
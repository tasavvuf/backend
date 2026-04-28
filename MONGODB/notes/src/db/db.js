const mongoose = require("mongoose")
require("dotenv").config()
async function conectDB() {
    await mongoose.connect(process.env.DB_URI)
    console.log("db has been connected ")
}
module.exports = conectDB
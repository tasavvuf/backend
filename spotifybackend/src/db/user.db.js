
const mongoose = require("mongoose")
async function conectDB() {
    if (!process.env.DB_URI) {
        throw new Error("DB_URI is missing. Expected it in backend/.env")
    }
    await mongoose.connect(process.env.DB_URI)
    console.log("db has been connected ")
}
module.exports = conectDB

const mongoose = require("mongoose")

async function conectDB() {
    await mongoose.connect("mongodb+srv://tevmusix_db_user:9yvPlvxJWSDLOYe4@cluster0.15ujrpm.mongodb.net/newdb")
    console.log("db has been connected ")
}
module.exports = conectDB
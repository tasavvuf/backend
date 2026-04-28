const mongoose = require("mongoose")

const exampleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
}) 

const exampleModel = mongoose.model("example",exampleSchema)
module.exports = exampleModel
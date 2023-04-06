const mongoose = require("mongoose");

const laptopSchema = new mongoose.Schema({
  id: { type: String, required: true },
  image: { type: String, required: true },
  desc: { type: String, required: true },
  model: { type: String, required: true },
  rate: { type: String, required: true },
  count: { type: Number, required: true },
  pickup: { type: String, required: true },
  shipping: { type: String, required: true },
  price: { type: String, required: true },
  print: { type: String, required: true },
  offer: { type: String, required: false },
});

const laptopModel = mongoose.model("laptopdata", laptopSchema);
module.exports = laptopModel;
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
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
  qty:{type:Number,default:1,required:true},
});

const cartModel = mongoose.model("cartdata", cartSchema);
module.exports = cartModel;
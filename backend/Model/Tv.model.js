const mongoose = require("mongoose");

const TvSchema = new mongoose.Schema({
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

const TvModel = mongoose.model("tvdata", TvSchema);

module.exports = TvModel;

// "id": 1,
// "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6458/6458645_sd.jpg;maxHeight=640;maxWidth=550",
// "desc": "Toshiba - 55' Class C350 Series LED 4K UHD Smart Fire TV",
// "model": "55C350KU",
// "rate": 4.5,
// "count": 465,
// "pickup": "Available today at Aiea",
// "shipping": "Unavailable in your area",
// "price": 339.99,
// "saving": 130,
// "print": 469.99,
// "offer": "30 free days fuboTV Pro & 1 more"

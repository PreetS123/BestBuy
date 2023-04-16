const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  firstname: { type: String, required: false },
  lastname: { type: String, required: false },
  mobileno: { type: Number, unique: true, required: false },
  email: { type: String, unique: true, required: true },
  password: {
    type: String,
    min: [8, "Must be atleast 8 character long"],
    max: 16,
    required: true,
  },
  token: { type: String },
});

const authModel = mongoose.model("authdata", authSchema);
module.exports = authModel;

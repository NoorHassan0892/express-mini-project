const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone_number: { type: Number, default: 100000 },
  DOB: Date,
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "book" }],
});

module.exports = mongoose.model("author", authorSchema);

const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "author" },
  price: { type: Number, default: 5 },
  image: { type: String, default: "link" },
});

module.exports = mongoose.model("book", bookSchema);

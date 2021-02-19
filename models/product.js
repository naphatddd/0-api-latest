const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number },
    desc: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
  },
  {
    timestamps: false,
    collection: "products",
  }
);

const product = mongoose.model("Product", schema);

module.exports = product;

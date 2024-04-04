import mongoose from "mongoose";
import Product from "../Product/product.model.js";

const BidSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  bidder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

BidSchema.post("save", { document: true }, async function (doc, next) {
  console.log(doc);
  next();
});
export default mongoose.model("Bid", BidSchema);

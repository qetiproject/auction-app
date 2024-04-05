import mongoose from "mongoose";
import Product from "../Product/product.model.js";

const BidSchema = new mongoose.Schema(
  {
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
  },
  {
    versionKey: false,
  }
);

BidSchema.post("save", { document: true }, async function (doc, next) {
  const product = await Product.findById(doc.product);
  if (!product) {
    throw new Error("Product not found");
  }
  await Product.findByIdAndUpdate(product._id, {
    $push: { bids: doc._id },
  });
  next();
});

BidSchema.post("deleteOne", { document: true }, async function (doc, next) {
  const product = await Product.findById(doc.product);
  if (!product) {
    throw new Error("Product not found");
  }
  await Product.findByIdAndUpdate(product._id, {
    $pull: { bids: doc._id },
  });
  next();
});

export default mongoose.model("Bid", BidSchema);

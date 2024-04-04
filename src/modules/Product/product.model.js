import mongoose from "mongoose";
import User from "../User/user.model.js";
import { getUserById } from "../User/user.services.js";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  basePrice: {
    type: Number,
    required: true,
  },

  sold: {
    type: Boolean,
    default: false,
    required: false,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bid",
      required: false,
    },
  ],
});

ProductSchema.post("save", { document: true }, async function (doc, next) {
  const user = await getUserById(doc.seller);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  await User.findByIdAndUpdate(user._id, {
    $push: { sellProducts: doc.seller },
  });
  next();
});

ProductSchema.post("deleteOne", { document: true }, async function (doc, next) {
  const user = await getUserById(doc.seller);
  await User.findByIdAndUpdate(user._id, {
    $pull: { sellProducts: doc.seller },
  });
  next();
});

export default mongoose.model("Product", ProductSchema);

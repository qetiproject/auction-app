import mongoose from "mongoose";

const BidSchema = new mongoose.Schema({
  // product: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Product",
  //   required: true,
  // },
  bidder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  //   createdAt: {
  //     type: createdAt,
  //     required: false,
  //   },
});

export default mongoose.model("Bid", BidSchema);

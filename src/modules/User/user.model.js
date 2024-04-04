import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  //   wonProducts: [
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Product",
  //       required: true,
  //     },
  //   ],
  sellProducts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
  role: ["bidder", "seller"],
});

export default mongoose.model("User", UserSchema);

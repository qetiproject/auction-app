import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    wonProducts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: false,
      },
    ],
    sellProducts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: false,
      },
    ],
    role: ["bidder", "seller"],
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("User", UserSchema);

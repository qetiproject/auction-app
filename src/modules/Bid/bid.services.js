import Bid from "./bid.model.js";
import User from "../User/user.model.js";

export async function createBid(body) {
  const bidder = await User.findById(body.bidder);
  if (!bidder) {
    throw new Error("User not found");
  }
  if (bidder.role != "bidder") {
    throw new Error("User has no bidder role");
  }
  const newBid = new Bid(body);
  await newBid.save();
  return newBid;
}

export async function getBids() {
  const bids = await Bid.find();
  return bids;
}

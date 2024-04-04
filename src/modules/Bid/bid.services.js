import Bid from "./bid.model.js";
import User from "../User/user.model.js";
import Product from "../Product/product.model.js";

export async function createBid(body) {
  const bidder = await User.findById(body.bidder);
  if (!bidder) {
    throw new Error("User not found");
  }
  if (bidder.role != "bidder") {
    throw new Error("User has no bidder role");
  }
  const product = await Product.findById(body.product);
  if (!product) {
    throw new Error("Product not found");
  }
  const newBid = new Bid(body);
  await newBid.save();
  return newBid;
}

export async function getBids() {
  const bids = await Bid.find();
  return bids;
}

export async function getBidByProductId(productId) {
  let bids = await getBids();
  bids = bids.filter((x) => x.product == productId);
  if (bids.length == 0) {
    throw new Error("Bids not found");
  }
  return bids;
}

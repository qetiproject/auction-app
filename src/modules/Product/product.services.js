import Product from "./product.model.js";
import Bid from "../Bid/bid.model.js";
import User from "../User/user.model.js";

export async function createProduct(body) {
  const newProduct = new Product(body);
  await newProduct.save();
  return newProduct;
}

export async function getProducts() {
  const products = Product.find();
  return products;
}

export async function deleteProductById(productId) {
  const product = await Product.findById(productId);
  if (!product) {
    throw new Error("Product not found");
  }
  await product.deleteOne();
  return product;
}

export async function soldProduct(body) {
  const product = await Product.findById(body.product);
  const lastbidId = product.bids[product.bids.length - 1];
  const lastbid = await Bid.findById(lastbidId);
  const bidTime = lastbid.createdAt;
  if (Date.now() - bidTime > 1 * 60 * 60 * 60 * 1000) {
    console.log(product._id);
    await Product.findByIdAndUpdate(product._id, {
      $set: { sold: true },
    });
    await User.findByIdAndUpdate(lastbid.bidder, {
      $push: { wonProducts: body.product },
    });
  }
  return product;
}

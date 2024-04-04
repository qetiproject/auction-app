import Product from "./product.model.js";

export async function createProduct(body) {
  const newProduct = new Product(body);
  await newProduct.save();
  return newProduct;
}

export async function getProducts() {
  const products = Product.find().populate("seller");
  return products;
}

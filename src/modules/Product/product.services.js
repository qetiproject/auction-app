import Product from "./product.model.js";

export async function createProduct(body) {
  const newProduct = new Product(body);
  await newProduct.save();
  return newProduct;
}

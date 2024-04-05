import Product from "./product.model.js";

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

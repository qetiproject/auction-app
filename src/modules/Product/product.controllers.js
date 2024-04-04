import { createProduct, getProducts } from "./product.services.js";

class ProductController {
  async createProduct(req, res) {
    try {
      const newProduct = await createProduct(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getProducts(_, res) {
    try {
      const products = await getProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new ProductController();

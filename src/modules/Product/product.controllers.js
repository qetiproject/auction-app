import {
  createProduct,
  getProducts,
  deleteProductById,
  soldProduct,
} from "./product.services.js";

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

  async deleteProductById(req, res) {
    try {
      const product = await deleteProductById(req.params.productId);
      console.log(req.params.productId);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async soldProduct(req, res) {
    try {
      const product = await soldProduct(req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new ProductController();

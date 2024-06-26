import express from "express";
import ProductController from "./product.controllers.js";

const ProductRouter = express.Router();

ProductRouter.post("/", ProductController.createProduct);

ProductRouter.get("/", ProductController.getProducts);

ProductRouter.delete("/:productId", ProductController.deleteProductById);

ProductRouter.put("/", ProductController.soldProduct);

export default ProductRouter;

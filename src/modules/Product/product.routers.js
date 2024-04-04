import express from "express";
import ProductController from "./product.controllers.js";

const ProductRouter = express.Router();

ProductRouter.post("/", ProductController.createProduct);

export default ProductRouter;

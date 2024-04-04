import express from "express";
import bodyParser from "body-parser";

import { connectToMongoDB } from "./shared/database.js";
import UserRouter from "./modules/User/user.routers.js";
import ProductRouter from "./modules/Product/product.routers.js";
import BidRouter from "./modules/Bid/bid.routers.js";

const app = express();
app.use(bodyParser.json());

async function main() {
  await connectToMongoDB();

  app.use("/api/users", UserRouter);
  app.use("/api/products", ProductRouter);
  app.use("/api/bids", BidRouter);

  app.listen(3000, () => {
    console.log("node app is running");
  });
}

main();

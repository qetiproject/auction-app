import express from "express";
import BidController from "./bid.controller.js";

const BidRouter = express.Router();

BidRouter.post("/", BidController.createBid);

BidRouter.get("/", BidController.getBids);

export default BidRouter;

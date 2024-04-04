import { getBids, createBid, getBidByProductId } from "./bid.services.js";

class BidController {
  async createBid(req, res) {
    try {
      const bid = await createBid(req.body);
      res.status(200).json(bid);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async getBids(_, res) {
    try {
      const bid = await getBids();
      res.status(200).json(bid);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getBidByProductId(req, res) {
    try {
      const bid = await getBidByProductId(req.params.productId);
      res.status(200).json(bid);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new BidController();

import express from "express";
import { addToCart, getAllDish, removeItem } from "./cartControls";

const router = express.Router();

router
  .post("/add-to-cart", addToCart)
  .get("/get-user-cart", getAllDish)
  .patch("/remove-item-cart", removeItem);

export default router;

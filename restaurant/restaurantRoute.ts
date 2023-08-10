import express from "express";
import {
  createRestaurant,
  getRestaurant,
  handleDelete,
  restaurant,
} from "./restaurantControls";

const router = express.Router();

router
  .post("/create-restaurant", createRestaurant)
  .get("/get-restaurant", getRestaurant)
  .delete("/delete-restaurant", handleDelete)
  .patch("/get-res", restaurant);

export default router;
